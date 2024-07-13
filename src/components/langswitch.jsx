// LanguageSwitcher.js

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher flex items-center justify-center">
      <h1 className="text-white text-2xl font-bold mr-4">Select Language:</h1>
      <button
        className="text-white bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-md mr-2"
        onClick={() => changeLanguage('en')}
      >
        English
      </button>
      <button
        className="text-white bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-md"
        onClick={() => changeLanguage('ar')}
      >
        عربي
      </button>
    </div>
  );
};

export default LanguageSwitcher;
