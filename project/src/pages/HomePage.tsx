import React, { useEffect, useState } from 'react';
import { 
  Download, 
  Star, 
  Clock, 
  CheckCircle,
  Zap, 
  Globe, 
  Shield,
  Phone,
  Mail,
  Github,
  Headphones,
  ArrowDown,
  Code,
  BookOpen,
  Heart,
  Languages,
  Cloud
} from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useTranslation } from '../utils/translations';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useApp();
  const t = useTranslation(language);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 text-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900 dark:to-gray-900 light:to-gray-50 animate-gradient-shift"></div>
        
        <div className={`max-w-2xl mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* App Icon with Pulse Animation */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 flex items-center justify-center animate-pulse-slow">
            <img src="/app_icon.png" alt="Focus Zone" className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl shadow-2xl" />
          </div>
          
          {/* App Title with Gradient Text */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-text px-4">
            {t.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 dark:text-gray-400 light:text-gray-600 mb-4 sm:mb-6 px-4">{t.heroSubtitle}</p>
          
          {/* Description */}
          <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto px-4">
            {t.heroDescription}
          </p>
          
          {/* Rating with Animation */}
          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse mb-6 sm:mb-8 px-4">
            <div className="flex space-x-1 rtl:space-x-reverse">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400 transition-all duration-300 delay-${i * 100}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <span className="text-base sm:text-lg text-gray-400 dark:text-gray-400 light:text-gray-600">4.8 {t.rating}</span>
          </div>
          
          {/* Download Buttons with Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <button className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 rtl:space-x-reverse">
              <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
              <span>{t.downloadNow}</span>
            </button>
            <a 
              href="https://github.com/waytoo-average/Focus-zone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-gray-600 dark:border-gray-600 light:border-gray-400 hover:border-blue-400 hover:bg-blue-400/10 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <Code className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{t.viewSourceCode}</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 dark:text-gray-400 light:text-gray-600 mx-auto" />
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">{t.keyFeatures}</h2>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              {t.keyFeaturesDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Zap,
                title: t.stayFocused,
                description: t.stayFocusedDesc,
                color: "bg-blue-600",
                delay: "delay-0"
              },
              {
                icon: CheckCircle,
                title: t.neverMissDeadline,
                description: t.neverMissDeadlineDesc,
                color: "bg-green-600",
                delay: "delay-100"
              },
              {
                icon: Heart,
                title: t.nurtureYourFaith,
                description: t.nurtureYourFaithDesc,
                color: "bg-purple-600",
                delay: "delay-200"
              },
              {
                icon: BookOpen,
                title: t.accessQuran,
                description: t.accessQuranDesc,
                color: "bg-orange-600",
                delay: "delay-300"
              },
              {
                icon: Cloud,
                title: t.seamlessCloudSync,
                description: t.seamlessCloudSyncDesc,
                color: "bg-indigo-600",
                delay: "delay-400"
              },
              {
                icon: Languages,
                title: t.bilingualSupport,
                description: t.bilingualSupportDesc,
                color: "bg-cyan-600",
                delay: "delay-500"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`group bg-gray-800/50 dark:bg-gray-800/50 light:bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up ${feature.delay} border border-gray-700/50 dark:border-gray-700/50 light:border-gray-200/50 shadow-lg light:shadow-xl`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 group-hover:text-gray-300 dark:group-hover:text-gray-300 light:group-hover:text-gray-700 transition-colors text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why You'll Love Focus Zone */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl sm:rounded-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                {t.whyYouLove}
              </h2>
              <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                {t.whyYouLoveDesc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {[
                  { value: t.allInOneConvenience, label: "Convenience" },
                  { value: t.bilingualSupportStat, label: "Support" },
                  { value: t.customizable, label: "Customizable" }
                ].map((stat, index) => (
                  <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300 mb-1 sm:mb-2 animate-count-up">
                      {stat.value}
                    </div>
                    <div className="text-blue-200 text-sm sm:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                {t.downloadFocusZone}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section id="download" className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 flex items-center justify-center animate-pulse-slow">
            <img src="/app_icon.png" alt="Focus Zone" className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl shadow-2xl" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
            {t.readyToTransform}
          </h2>
          
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 px-4">
            {t.readyToTransformDesc}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 rtl:space-x-reverse">
              <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
              <span>{t.downloadFocusZone}</span>
            </button>
            <a 
              href="https://github.com/waytoo-average/Focus-zone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-gray-600 dark:border-gray-600 light:border-gray-400 hover:border-blue-400 hover:bg-blue-400/10 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <Code className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{t.viewSourceCode}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">{t.needHelp}</h2>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              {t.needHelpDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { 
                icon: Phone, 
                title: t.phoneSupport, 
                description: "01027658156", 
                color: "bg-green-600",
                link: "tel:01027658156"
              },
              { 
                icon: Mail, 
                title: t.emailSupport, 
                description: "belalmohamedelnemr0@gmail.com", 
                color: "bg-blue-600",
                link: "mailto:belalmohamedelnemr0@gmail.com"
              },
              { 
                icon: Github, 
                title: t.github, 
                description: t.viewOurProjects, 
                color: "bg-purple-600",
                link: "https://github.com/waytoo-average"
              }
            ].map((support, index) => (
              <a
                key={index}
                href={support.link}
                target={support.link.startsWith('http') ? '_blank' : undefined}
                rel={support.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group bg-gray-800/50 dark:bg-gray-800/50 light:bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-white transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-${index * 100} block border border-gray-700/50 dark:border-gray-700/50 light:border-gray-200/50 shadow-lg light:shadow-xl`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${support.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <support.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1 sm:mb-2 group-hover:text-blue-400 transition-colors text-sm sm:text-base">
                  {support.title}
                </h3>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs sm:text-sm group-hover:text-gray-300 dark:group-hover:text-gray-300 light:group-hover:text-gray-700 transition-colors break-all">
                  {support.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;