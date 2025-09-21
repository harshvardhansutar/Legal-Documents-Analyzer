import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import LandingPage from './pages/LandingPage';
import UploadPage from './pages/UploadPage';
import ProcessingPage from './pages/ProcessingPage';
import ResultDashboard from './pages/ResultDashboard';
import ExportPage from './pages/ExportPage';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/processing" element={<ProcessingPage />} />
          <Route path="/results" element={<ResultDashboard />} />
          <Route path="/export" element={<ExportPage />} />
          {/* Add Login/Signup pages as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
