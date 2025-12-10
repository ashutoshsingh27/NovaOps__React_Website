import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import { AppView } from './types';

function App() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  // Simple hash-based routing handler to support browser back button
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // remove #
      if (Object.values(AppView).includes(hash as AppView)) {
        setCurrentView(hash as AppView);
      } else if (hash === '') {
        setCurrentView(AppView.HOME);
      }
    };

    // Set initial view based on hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: AppView) => {
    window.location.hash = view;
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.HOME:
        return <Home onNavigate={handleNavigate} />;
      case AppView.SERVICES:
        return <ServicesPage onNavigate={handleNavigate} />;
      case AppView.ABOUT:
        return <AboutPage />;
      case AppView.CASE_STUDIES:
        return <CaseStudiesPage />;
      case AppView.CONTACT:
        return <ContactPage />;
      case AppView.BOOKING:
        return <BookingPage />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={handleNavigate}>
      {renderView()}
      <ChatBot />
    </Layout>
  );
}

export default App;