import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  function handleFileChange(e) {
    const selected = e.target.files[0];
    if (selected && (selected.type === 'application/pdf' || selected.name.endsWith('.docx'))) {
      setFile(selected);
    } else {
      alert('Please upload a PDF or DOCX file.');
    }
  }

  function handleUpload() {
    if (!file) {
      alert('Please select a file first.');
      return;
    }
    // Upload logic here
    navigate('/processing');
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Upload Contract / Agreement</h2>
      <label htmlFor="file-upload" style={styles.dropBox}>
        {file ? file.name : 'Drag & Drop or Click to Upload PDF / DOCX'}
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.docx"
          style={{ display: 'none' }}
        />
      </label>
      <button style={styles.button} onClick={handleUpload}>Upload & Analyze</button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: '80px auto',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#004080',
  },
  title: {
    fontSize: '2rem',
    marginBottom: 30,
    fontWeight: '700',
  },
  dropBox: {
    display: 'block',
    border: '3px dashed #0073e6',
    borderRadius: 15,
    padding: 40,
    fontSize: '1.2rem',
    color: '#0073e6',
    cursor: 'pointer',
    marginBottom: 30,
    userSelect: 'none',
    transition: 'background-color 0.3s ease',
  },
  button: {
    padding: '15px 40px',
    fontSize: '1.1rem',
    backgroundColor: '#f5a623',
    border: 'none',
    borderRadius: 30,
    color: 'white',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 5px 12px rgba(245,166,35,0.5)',
    transition: 'background-color 0.3s ease',
  },
};
