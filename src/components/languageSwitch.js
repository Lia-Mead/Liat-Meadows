import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const LanguageSwitch = ({ setIsHebrew }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="lang-box">
      <button
        className="lang-btn"
        onClick={() => {
          changeLanguage('en');
          setIsHebrew(false);
          // handleLanguageChange('en');
        }}
      >
        English
      </button>
      <button
        className="lang-btn"
        onClick={() => {
          changeLanguage('de');
          setIsHebrew(false);
          // handleLanguageChange('de');
        }}
      >
        Deutsch
      </button>
      <button
        className="lang-btn"
        onClick={() => {
          changeLanguage('he');
          setIsHebrew(true);
          // handleLanguageChange('he');
        }}
      >
        עברית
      </button>
    </div>
  );
};

LanguageSwitch.propTypes = {
  setIsHebrew: PropTypes.func.isRequired,
  // handleLanguageChange: PropTypes.func,
};

export default LanguageSwitch;
