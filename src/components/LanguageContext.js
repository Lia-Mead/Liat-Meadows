// import React, { createContext, useContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

// // Create a context
// const LanguageContext = createContext();

// // Create a provider component
// export const LanguageProvider = ({ children }) => {
//   const browserLanguage = window.navigator.language;
//   const savedLanguage = localStorage.getItem('selectedLanguage');

//   const [currentLanguage, setCurrentLanguage] = useState(
//     browserLanguage || savedLanguage || 'en'
//   );

//   useEffect(() => {
//     localStorage.setItem('language', currentLanguage);
//   }, [currentLanguage]);

//   return (
//     <LanguageContext.Provider value={{ currentLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// // Create a custom hook to consume the context
// export const useLanguage = () => {
//   return useContext(LanguageContext);
// };

// LanguageProvider.propTypes = {
//   children: PropTypes.node,
// };
