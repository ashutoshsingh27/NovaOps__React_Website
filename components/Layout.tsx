import React, { useState } from 'react';
import { Menu, X, Rocket, Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';
import { AppView } from '../types';
import { NAV_ITEMS } from '../constants';

interface LayoutProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  children: React.ReactNode;
}

export const Header: React.FC<{ currentView: AppView; onNavigate: (view: AppView) => void }> = ({ currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (view: AppView) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-primary/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNav(AppView.HOME)} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="bg-accent p-2 rounded-lg group-hover:bg-accentHover transition-colors">
            <Rocket className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">NovaOps</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.view)}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                currentView === item.view ? 'text-accent' : 'text-slate-300'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNav(AppView.BOOKING)}
            className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accentHover transition-all shadow-lg shadow-accent/20"
          >
            Book Consultation
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-secondary border-b border-slate-800 p-4 flex flex-col gap-4 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.view)}
              className={`text-left py-2 px-4 rounded-lg ${
                currentView === item.view ? 'bg-slate-700 text-accent' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNav(AppView.BOOKING)}
            className="bg-accent text-white py-3 rounded-lg font-semibold text-center mt-2"
          >
            Book Consultation
          </button>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC<{ onNavigate: (view: AppView) => void }> = ({ onNavigate }) => {
  return (
    <footer className="bg-secondary border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-accent p-1.5 rounded-lg">
                <Rocket className="text-white" size={20} />
              </div>
              <span className="text-lg font-bold text-white">NovaOps</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses with intelligent automation and cloud-native infrastructure. Scale faster, efficiently.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => onNavigate(item.view)}
                    className="text-slate-400 hover:text-accent text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>AI Automation Agents</li>
              <li>Cloud Infrastructure</li>
              <li>DevOps & CI/CD</li>
              <li>Data Engineering</li>
              <li>System Architecture</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span>hello@novaops.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} NovaOps AI & Cloud. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<LayoutProps> = ({ currentView, onNavigate, children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-slate-100">
      <Header currentView={currentView} onNavigate={onNavigate} />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};