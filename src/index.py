from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import openai
import faiss
import numpy as np
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI
import tempfile
import PyPDF2
import docx

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize OpenAI API key
openai.api_key = "YOUR_OPENAI_API_KEY"

# Initialize embedding model
embedding_model = OpenAIEmbeddings()

# Global FAISS index placeholder
vectorstore = None

def extract_text_from_pdf(file_path):
    text = ""
    with open(file_path, "rb") as f:
        reader = PyPDF2.PdfReader(f)
        for page in reader.pages:
            text += page.extract_text() + "\n"
    return text

def extract_text_from_docx(file_path):
    doc = docx.Document(file_path)
    text = "\n".join([para.text for para in doc.paragraphs])
    return text

@app.post("/upload/")
async def upload_document(file: UploadFile = File(...)):
    # Save uploaded file temporarily
    suffix = file.filename.split('.')[-1]
    with tempfile.NamedTemporaryFile(delete=False, suffix=f".{suffix}") as tmp:
        content = await file.read()
        tmp.write(content)
        tmp_path = tmp.name

    # Extract text based on file type
    if suffix.lower() == "pdf":
        text = extract_text_from_pdf(tmp_path)
    elif suffix.lower() == "docx":
        text = extract_text_from_docx(tmp_path)
    else:
        return {"error": "Unsupported file type"}

    # Split text into chunks for embedding
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    docs = text_splitter.split_text(text)

    # Create embeddings and build FAISS vectorstore
    global vectorstore
    embeddings = embedding_model.embed_documents(docs)
    dimension = len(embeddings[0])
    index = faiss.IndexFlatL2(dimension)
    index.add(np.array(embeddings).astype("float32"))

    vectorstore = FAISS(index, embedding_model, docs)

    return {"message": "Document processed and indexed", "chunks": len(docs)}

@app.post("/query/")
async def query_document(question: str):
    global vectorstore
    if vectorstore is None:
        return {"error": "No document indexed yet"}

    # Setup retrieval QA chain
    retriever = vectorstore.as_retriever(search_type="similarity", search_kwargs={"k": 3})
    llm = OpenAI(temperature=0)
    qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever)

    # Get answer from RAG chain
    answer = qa_chain.run(question)

    return {"answer": answer}
