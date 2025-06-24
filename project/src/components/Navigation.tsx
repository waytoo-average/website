import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useTranslation } from '../utils/translations';
import LanguageThemeToggle from './LanguageThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language } = useApp();
  const t = useTranslation(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage 
        ? 'bg-gray-900/95 dark:bg-gray-900/95 light:bg-white/95 backdrop-blur-lg border-b border-gray-800 dark:border-gray-800 light:border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <img src="/app_icon.png" alt="Focus Zone" className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg" />
            </div>
            <span className="text-lg sm:text-xl font-bold">Focus Zone</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 rtl:space-x-reverse">
            <Link 
              to="/" 
              className="hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base"
            >
              {t.home}
            </Link>
            <a 
              href="#features" 
              className="hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base"
              onClick={(e) => {
                if (location.pathname !== '/') {
                  window.location.href = '/#features';
                } else {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t.features}
            </a>
            <a 
              href="#download" 
              className="hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base"
              onClick={(e) => {
                if (location.pathname !== '/') {
                  window.location.href = '/#download';
                } else {
                  e.preventDefault();
                  document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t.download}
            </a>
            <Link 
              to="/privacy" 
              className="hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base"
            >
              {t.privacy}
            </Link>
            <Link 
              to="/terms" 
              className="hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base"
            >
              {t.terms}
            </Link>
            <LanguageThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            <LanguageThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 dark:bg-gray-800 light:bg-white border-t border-gray-700 dark:border-gray-700 light:border-gray-200 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-sm sm:text-base font-medium hover:text-blue-400 hover:bg-gray-700 dark:hover:bg-gray-700 light:hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.home}
              </Link>
              <a
                href="#features"
                className="block px-3 py-2 text-sm sm:text-base font-medium hover:text-blue-400 hover:bg-gray-700 dark:hover:bg-gray-700 light:hover:bg-gray-100 rounded-md transition-colors"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (location.pathname !== '/') {
                    window.location.href = '/#features';
                  } else {
                    e.preventDefault();
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t.features}
              </a>
              <a
                href="#download"
                className="block px-3 py-2 text-sm sm:text-base font-medium hover:text-blue-400 hover:bg-gray-700 dark:hover:bg-gray-700 light:hover:bg-gray-100 rounded-md transition-colors"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (location.pathname !== '/') {
                    window.location.href = '/#download';
                  } else {
                    e.preventDefault();
                    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t.download}
              </a>
              <Link
                to="/privacy"
                className="block px-3 py-2 text-sm sm:text-base font-medium hover:text-blue-400 hover:bg-gray-700 dark:hover:bg-gray-700 light:hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.privacyPolicy}
              </Link>
              <Link
                to="/terms"
                className="block px-3 py-2 text-sm sm:text-base font-medium hover:text-blue-400 hover:bg-gray-700 dark:hover:bg-gray-700 light:hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.termsOfService}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;