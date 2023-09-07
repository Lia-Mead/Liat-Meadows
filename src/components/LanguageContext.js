// import React, { createContext, useContext, useState } from 'react';
// import PropTypes from 'prop-types';

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [isHebrew, setIsHebrew] = useState(false);
//   console.log('isHebrew:', isHebrew);

//   return (
//     <LanguageContext.Provider value={{ isHebrew, setIsHebrew }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// };

// LanguageProvider.propTypes = {
//   children: PropTypes.node,
// };
