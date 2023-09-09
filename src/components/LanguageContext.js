// import React, { createContext, useContext, useState } from 'react';
// import PropTypes from 'prop-types';

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [isHebrew, setIsHebrew] = useState(false);

//   return (
//     <LanguageContext.Provider value={{ isHebrew, setIsHebrew }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// LanguageProvider.propTypes = {
//   children: PropTypes.node,
// };

// // Define a custom hook to access the language context
// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// };

// LanguageContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

// Create a context
const LanguageContext = createContext();

// Create a custom hook to access the language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Create the LanguageProvider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'en'
  );

  // Update the language in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node,
};

export default LanguageContext;
