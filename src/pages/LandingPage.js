import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>LegalEase</h1>
      <p style={styles.tagline}>Simplifying Legal Language with AI</p>
      <button style={styles.button} onClick={() => navigate('/upload')}>
        Upload Legal Document
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: 120,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#004080',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '900',
    marginBottom: 10,
    letterSpacing: '2px',
  },
  tagline: {
    fontSize: '1.5rem',
    marginBottom: 40,
    color: '#0073e6',
    fontWeight: '600',
  },
  button: {
    padding: '18px 45px',
    fontSize: '1.25rem',
    backgroundColor: '#f5a623',
    border: 'none',
    borderRadius: 30,
    color: 'white',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 6px 12px rgba(245,166,35,0.5)',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#d48806',
    boxShadow: '0 8px 16px rgba(212,136,6,0.7)',
  },
};
