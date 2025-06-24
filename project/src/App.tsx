import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 dark:bg-gray-900 light:bg-gray-50 text-white dark:text-white light:text-gray-900 transition-colors duration-300">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;