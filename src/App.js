import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
// import PropTypes from 'prop-types';

import i18n from './i18n/i18n';
import { LanguageProvider } from './components/LanguageContext';
import { useTranslation } from 'react-i18next';
import ReactDOM from 'react-dom';

import axe from 'react-axe';

import HomeScreen from './components/homeScreen';
import Header from './ui/header';
import About from './components/about';
import Footer from './ui/footer';
import Design from './components/design';
import Development from './components/development';
import ProjectDetails from './components/projectDetails';
import ScrollToTopOnPageChange from './components/scrollToTopOnPageChange';
import useLanguage from './components/LanguageContext';
import './styles/App.scss';

function App() {
  const { t } = useTranslation();
  const [isHebrew, setIsHebrew] = useState(false);

  if (process.env.NODE_ENV === 'production') {
    // Code to run in production environment
    console.log('prod');
  } else {
    // Code to run in development environment
    console.log('dev');
  }

  if (process.env.NODE_ENV === 'development') {
    axe(React, ReactDOM, 1000); // Configure and initialize the package
  }

  // const { language, setLanguage } = useLanguage();

  // const handleLanguageChange = (newLanguage) => {
  //   setLanguage(newLanguage);
  // };

  useEffect(() => {
    if (i18n.language === 'he') {
      setIsHebrew(true);
    } else {
      setIsHebrew(false);
    }
  }, [setIsHebrew]);

  // const isHebrew = i18n.language === 'he';

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const userLanguage = window.navigator.language;
    console.log("User's browser language:", userLanguage);

    changeLanguage(userLanguage);

    // TODO save in cookie local storage
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <Router>
          <ScrollToTopOnPageChange history={history} />
          <Header
            t={t}
            isHebrew={isHebrew}
            setIsHebrew={setIsHebrew}
            // handleLanguageChange={handleLanguageChange}
          />
          <main className="main">
            <Switch>
              <Route path="/" exact component={HomeScreen} />
              <Route path="/development" component={Development} />
              <Route path="/design" component={Design} />
              <Route path="/about" component={About} />
              <Route path="/projectDetails/:slug" component={ProjectDetails} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </LanguageProvider>
    </I18nextProvider>
  );
}

// App.propTypes = {
//   // t: PropTypes.func.isRequired,
// };

export default App;
