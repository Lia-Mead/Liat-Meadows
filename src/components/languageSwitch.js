import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const LanguageSwitch = ({ setIsHebrew }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button
        className="lang-btn"
        onClick={() => {
          changeLanguage('en');
          setIsHebrew(false);
        }}
      >
        English
      </button>
      <button
        className="lang-btn"
        onClick={() => {
          changeLanguage('de');
          setIsHebrew(false);
        }}
      >
        Deutsch
      </button>
      <button
        className="lang-btn"
        onClick={() => {
          changeLanguage('he');
          setIsHebrew(true);
        }}
      >
        עברית
      </button>
    </div>
  );
};

LanguageSwitch.propTypes = {
  setIsHebrew: PropTypes.func.isRequired,
};

export default LanguageSwitch;
