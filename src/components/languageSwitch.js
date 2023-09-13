import { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const LanguageSwitch = ({ setIsHebrew }) => {
  const { i18n } = useTranslation();

  const setIsHebrewCallback = useCallback(
    (value) => {
      setIsHebrew(value);
    },
    [setIsHebrew]
  );

  const handleLanguageChange = useCallback(
    (newLanguage) => {
      i18n.changeLanguage(newLanguage);

      const saveLanguageToLocalStorage = (language) => {
        localStorage.setItem('selectedLanguage', language);
        // console.log('newlang in local storage', language);
      };

      saveLanguageToLocalStorage(newLanguage);
    },
    [i18n]
  );

  useEffect(() => {
    const browserLanguage = window.navigator.language;
    // console.log("User's browser language:", browserLanguage);

    const savedLanguage = localStorage.getItem('selectedLanguage');
    // console.log('savedLanguage', savedLanguage);

    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    } else {
      handleLanguageChange(browserLanguage);
    }

    if (savedLanguage == 'he') {
      // setIsHebrew(true);
      setIsHebrewCallback(true);
    }
  }, [handleLanguageChange, i18n, setIsHebrewCallback]);

  return (
    <div className="lang-box">
      <button
        className="lang-btn"
        onClick={() => {
          handleLanguageChange('en');
          setIsHebrewCallback(false);
        }}
      >
        English
      </button>
      <button
        className="lang-btn"
        onClick={() => {
          handleLanguageChange('de');
          setIsHebrewCallback(false);
        }}
      >
        Deutsch
      </button>
      <button
        className="lang-btn"
        onClick={() => {
          handleLanguageChange('he');
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
