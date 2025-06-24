import React from 'react';
import { Languages, Sun, Moon } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const LanguageThemeToggle = () => {
  const { language, theme, toggleLanguage, toggleTheme } = useApp();

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="p-2 rounded-lg bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200/80 hover:bg-gray-700/50 dark:hover:bg-gray-700/50 light:hover:bg-gray-300/80 transition-colors duration-200 flex items-center space-x-1 rtl:space-x-reverse"
        title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
      >
        <Languages className="w-4 h-4 text-gray-300 dark:text-gray-300 light:text-gray-700" />
        <span className="text-xs font-medium text-gray-300 dark:text-gray-300 light:text-gray-700">
          {language === 'en' ? 'عربي' : 'EN'}
        </span>
      </button>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200/80 hover:bg-gray-700/50 dark:hover:bg-gray-700/50 light:hover:bg-gray-300/80 transition-colors duration-200"
        title={theme === 'dark' ? (language === 'en' ? 'Switch to Light Mode' : 'التبديل إلى الوضع الفاتح') : (language === 'en' ? 'Switch to Dark Mode' : 'التبديل إلى الوضع المظلم')}
      >
        {theme === 'dark' ? (
          <Sun className="w-4 h-4 text-yellow-400" />
        ) : (
          <Moon className="w-4 h-4 text-blue-600" />
        )}
      </button>
    </div>
  );
};

export default LanguageThemeToggle;