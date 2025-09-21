import React, { useState } from 'react';
import DocumentOutline from '../components/DocumentOutline';
import ChatInterface from '../components/ChatInterface';

export default function ResultDashboard() {
  // Mock sections data
  const sections = [
    { title: '1. Introduction', content: 'This section introduces the parties and purpose of the agreement.' },
    { title: '2. Payment Terms', content: 'Details about payment schedules, amounts, and penalties.' },
    { title: '3. Confidentiality', content: 'Obligations regarding non-disclosure of sensitive information.' },
    { title: '4. Termination', content: 'Conditions under which the contract may be terminated.' },
  ];

  const [selectedSection, setSelectedSection] = useState(sections[0]);

  // Mock summary and risks
  const summary =
    'This contract outlines the terms between parties including payment and confidentiality. It aims to protect both parties and ensure clear obligations.';
  const risks =
    'Key risks include early termination penalties, confidentiality breaches, and delayed payments which may incur fees.';

  // Mock AI Q&A function
  async function handleAsk(question) {
    // Simulate AI response based on question keywords
    const lower = question.toLowerCase();
    if (lower.includes('risk')) {
      return risks;
    }
    if (lower.includes('payment')) {
      return 'Payment must be made within 30 days of invoice receipt to avoid penalties.';
    }
    if (lower.includes('termination')) {
      return 'Termination requires a 30-day written notice by either party.';
    }
    if (lower.includes('confidentiality')) {
      return 'All parties must keep information confidential for 5 years after contract end.';
    }
    return 'Sorry, I do not have information on that clause. Please ask about a specific section.';
  }

  return (
    <div style={styles.container}>
      {/* Left Panel: Document Outline */}
      <div style={styles.leftPanel}>
        <DocumentOutline sections={sections} onSelect={setSelectedSection} />
      </div>

      {/* Right Panel: Summary, Risks, Chat */}
      <div style={styles.rightPanel}>
        {/* Selected Section Content */}
        <div style={styles.card}>
          <h3 style={styles.heading}>Selected Section: {selectedSection.title}</h3>
          <p style={styles.text}>{selectedSection.content}</p>
        </div>

        {/* Plain Language Summary */}
        <div style={styles.card}>
          <h3 style={styles.heading}>Plain Language Summary</h3>
          <p style={styles.text}>{summary}</p>
        </div>

        {/* Key Risks / Issues */}
        <div style={{ ...styles.card, borderColor: '#f44336' }}>
          <h3 style={{ ...styles.heading, color: '#f44336' }}>Key Risks / Issues Highlighted</h3>
          <p style={{ ...styles.text, color: '#b71c1c' }}>{risks}</p>
        </div>

        {/* Interactive Q&A Chat */}
        <div style={styles.card}>
          <h3 style={styles.heading}>Ask a Question</h3>
          <ChatInterface onAsk={handleAsk} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    padding: 30,
    height: '90vh',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f9fafb',
  },
  leftPanel: {
    width: '30%',
    marginRight: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    boxShadow: '2px 4px 12px rgba(0,0,0,0.1)',
    overflowY: 'auto',
  },
  rightPanel: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    gap: 25,
  },
  card: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    border: '2px solid transparent',
  },
  heading: {
    marginBottom: 15,
    fontWeight: '700',
    fontSize: '1.5rem',
    color: '#004080',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: '#333',
  },
};
