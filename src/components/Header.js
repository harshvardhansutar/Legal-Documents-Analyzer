import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>⚖️ <span style={{ color: '#f5a623' }}>LegalEase</span></div>
      <nav>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/signup" style={{ ...styles.link, marginLeft: 20 }}>Signup</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: '15px 40px',
    backgroundColor: '#004080',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontWeight: '900',
    fontSize: '1.8rem',
    letterSpacing: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
};
