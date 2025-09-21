import React from 'react';

export default function DocumentOutline({ sections, onSelect }) {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Document Outline</h3>
      <ul style={styles.list}>
        {sections.map((section, idx) => (
          <li
            key={idx}
            style={styles.item}
            onClick={() => onSelect(section)}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f5a623'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {section.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    borderRight: '1px solid #ddd',
    padding: 20,
    width: '30%',
    height: '80vh',
    overflowY: 'auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#fff',
    boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
    borderRadius: '0 10px 10px 0',
  },
  title: {
    fontWeight: '700',
    fontSize: '1.3rem',
    marginBottom: 15,
    color: '#004080',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  item: {
    padding: '12px 15px',
    cursor: 'pointer',
    borderRadius: 8,
    fontWeight: '600',
    color: '#004080',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
};
