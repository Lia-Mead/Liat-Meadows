// import React, { createContext, useState, useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState(
//     localStorage.getItem('language') || 'en'
//   );

//   useEffect(() => {
//     localStorage.setItem('language', language);
//   }, [language]);

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// LanguageProvider.propTypes = {
//   children: PropTypes.node,
// };

// export default LanguageContext;

import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Create a context
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const switchLanguage = (newLanguage) => {
    setCurrentLanguage(newLanguage);
  };

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useLanguage = () => {
  return useContext(LanguageContext);
};

LanguageProvider.propTypes = {
  children: PropTypes.node,
};
