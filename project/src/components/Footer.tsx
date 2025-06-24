import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Github } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useTranslation } from '../utils/translations';

const Footer = () => {
  const { language } = useApp();
  const t = useTranslation(language);

  return (
    <footer className="border-t border-gray-800 dark:border-gray-800 light:border-gray-200 bg-gray-900 dark:bg-gray-900 light:bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center">
                <img src="/app_icon.png" alt="Focus Zone" className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg" />
              </div>
              <span className="text-lg sm:text-xl font-bold">Focus Zone</span>
            </div>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm max-w-md">
              {t.footerDescription}
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t.contact}</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs sm:text-sm">
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <a href="tel:01027658156" className="hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors break-all">01027658156</a>
              </li>
              <li className="flex items-start space-x-2 rtl:space-x-reverse">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                <a href="mailto:belalmohamedelnemr0@gmail.com" className="hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors break-all">belalmohamedelnemr0@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <Github className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <a href="https://github.com/waytoo-average" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors">GitHub</a>
              </li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t.legal}</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs sm:text-sm">
              <li><Link to="/privacy" className="hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors">{t.privacyPolicy}</Link></li>
              <li><Link to="/terms" className="hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors">{t.termsOfService}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-800 light:border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs sm:text-sm">
          <p>{t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;