import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
// import PropTypes from 'prop-types';

import i18n from './i18n/i18n';
import { LanguageProvider } from './components/LanguageContext';
import { useTranslation } from 'react-i18next';

import HomeScreen from './components/homeScreen';
import Header from './ui/header';
import About from './components/about';
import Footer from './ui/footer';
import Design from './components/design';
import Development from './components/development';
import ProjectDetails from './components/projectDetails';
import './styles/App.scss';

function App() {
  const { t } = useTranslation();
  const [isHebrew, setIsHebrew] = useState(false);

  useEffect(() => {
    if (i18n.language === 'he') {
      setIsHebrew(true);
    } else {
      setIsHebrew(false);
    }
  }, [setIsHebrew]);

  // const isHebrew = i18n.language === 'he';

  useEffect(() => {
    const userLanguage = window.navigator.language;
    console.log("User's browser language:", userLanguage);

    // You can use the userLanguage value to set your application's language or perform other actions based on it.
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <Router>
          <Header t={t} isHebrew={isHebrew} setIsHebrew={setIsHebrew} />
          <div className="main">
            <Switch>
              <Route path="/" exact component={HomeScreen} />
              <Route path="/development" component={Development} />
              <Route path="/design" component={Design} />
              <Route path="/about" component={About} />
              <Route path="/projectDetails/:slug" component={ProjectDetails} />
            </Switch>
          </div>
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
