import React from 'react';
import { Shield } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useTranslation } from '../utils/translations';

const PrivacyPolicy = () => {
  const { language } = useApp();
  const t = useTranslation(language);

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{t.privacyPolicyTitle}</h1>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-base sm:text-lg px-4">
            {t.privacyPolicyDesc}
          </p>
          <p className="text-gray-500 dark:text-gray-500 light:text-gray-500 text-sm mt-2">
            {t.lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-blue max-w-none">
          <div className="bg-gray-800/50 dark:bg-gray-800/50 light:bg-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 border border-gray-700/50 dark:border-gray-700/50 light:border-gray-200/50 shadow-lg light:shadow-xl">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-400">{t.informationWeCollect}</h2>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed text-sm sm:text-base">
                {t.informationWeCollectDesc}
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-400">{t.howWeUseInformation}</h2>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed text-sm sm:text-base">
                {t.howWeUseInformationDesc}
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-400">{t.thirdPartyServices}</h2>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed text-sm sm:text-base">
                {t.thirdPartyServicesDesc}
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-400">{t.contactUs}</h2>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed text-sm sm:text-base">
                {t.contactUsPrivacy}{' '}
                <a 
                  href="mailto:belalmohamedelnemr0@gmail.com" 
                  className="text-blue-400 hover:text-blue-300 underline break-all"
                >
                  belalmohamedelnemr0@gmail.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;