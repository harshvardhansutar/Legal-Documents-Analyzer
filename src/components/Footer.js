import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div>
        <a href="#about" style={styles.link}>About</a> | <a href="#contact" style={styles.link}>Contact</a>
      </div>
      <div style={{ fontSize: '0.85rem', marginTop: 8, color: '#666' }}>
        © 2024 LegalEase. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: 60,
    padding: '25px 40px',
    backgroundColor: '#f9fafb',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    borderTop: '1px solid #ddd',
  },
  link: {
    color: '#004080',
    textDecoration: 'none',
    fontWeight: '600',
    margin: '0 8px',
    transition: 'color 0.3s ease',
  },
};
