import React, { useState, useRef, useEffect } from 'react';

export default function ChatInterface({ onAsk }) {
  const [query, setQuery] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog]);

  async function handleSend() {
    if (!query.trim()) return;
    const userMessage = { sender: 'user', text: query };
    setChatLog((prev) => [...prev, userMessage]);
    setQuery('');
    const response = await onAsk(query);
    setChatLog((prev) => [...prev, { sender: 'ai', text: response }]);
  }

  return (
    <div style={styles.container}>
      <div style={styles.chatWindow}>
        {chatLog.map((msg, idx) => (
          <div
            key={idx}
            style={msg.sender === 'user' ? styles.userMsg : styles.aiMsg}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div style={styles.inputArea}>
        <input
          type="text"
          placeholder="Ask a question about the document..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          aria-label="Ask a question"
        />
        <button onClick={handleSend} style={styles.button} aria-label="Send question">
          Send
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
    border: '1px solid #ddd',
    borderRadius: 15,
    padding: 15,
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  chatWindow: {
    flexGrow: 1,
    overflowY: 'auto',
    marginBottom: 15,
    paddingRight: 10,
  },
  userMsg: {
    alignSelf: 'flex-end',
    backgroundColor: '#004080',
    color: 'white',
    padding: '10px 18px',
    borderRadius: '20px 20px 0 20px',
    margin: '6px 0',
    maxWidth: '75%',
    fontWeight: '600',
    fontSize: '1rem',
  },
  aiMsg: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5a623',
    color: '#004080',
    padding: '10px 18px',
    borderRadius: '20px 20px 20px 0',
    margin: '6px 0',
    maxWidth: '75%',
    fontWeight: '600',
    fontSize: '1rem',
  },
  inputArea: {
    display: 'flex',
    gap: 10,
  },
  input: {
    flexGrow: 1,
    padding: '12px 18px',
    fontSize: '1rem',
    borderRadius: 30,
    border: '1.5px solid #ddd',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '12px 30px',
    backgroundColor: '#004080',
    color: 'white',
    border: 'none',
    borderRadius: 30,
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};
