import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProcessingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/results');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h2 style={styles.message}>Analyzing your document with AI...</h2>
      <div style={styles.loader}></div>
      <progress style={styles.progress} max="100" value="70"></progress>
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
  message: {
    fontWeight: '700',
    fontSize: '1.8rem',
    marginBottom: 30,
  },
  loader: {
    margin: '0 auto 30px',
    border: '8px solid #f3f3f3',
    borderTop: '8px solid #f5a623',
    borderRadius: '50%',
    width: 70,
    height: 70,
    animation: 'spin 1.2s linear infinite',
  },
  progress: {
    width: '60%',
    height: 22,
    borderRadius: 12,
    overflow: 'hidden',
    appearance: 'none',
  },
};
