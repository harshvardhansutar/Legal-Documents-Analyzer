import React from 'react';

export default function ExportPage() {
  function handleDownload() {
    alert('Download as PDF feature coming soon!');
  }

  function handleCopy() {
    navigator.clipboard.writeText('Summary and analysis text here...');
    alert('Copied to clipboard!');
  }

  function handleEmail() {
    alert('Email summary feature coming soon!');
  }

  return (
    <div style={styles.container}>
      <h2>Export / Download</h2>
      <button style={styles.button} onClick={handleDownload}>Download as PDF</button>
      <button style={styles.button} onClick={handleCopy}>Copy to Clipboard</button>
      <button style={styles.button} onClick={handleEmail}>Email Summary</button>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', marginTop: 50 },
  button: {
    margin: 10,
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#004080',
    color: 'white',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
  },
};
