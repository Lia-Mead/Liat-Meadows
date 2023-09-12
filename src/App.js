import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useHistory,
  // Link,
} from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import PropTypes from 'prop-types';

import i18n from './i18n/i18n';
import { LanguageProvider } from './components/LanguageContext';
import { useTranslation } from 'react-i18next';
// import ReactDOM from 'react-dom';

import axe from 'react-axe';

import HomeScreen from './components/homeScreen';
import Header from './ui/header';
import About from './components/about';
import Footer from './ui/footer';
import Design from './components/design';
import Development from './components/development';
import ProjectDetails from './components/projectDetails';
// import ScrollToTop from './components/scrollToTop';
// import ScrollToTopOnPageChange from './components/scrollToTopOnPageChange';
// import useLanguage from './components/LanguageContext';
// import ScrollToTop from './components/scrollToTop';
import './styles/App.scss';

function App() {
  const { t } = useTranslation();
  const [isHebrew, setIsHebrew] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // const [scrollTop, setScrollTop] = useState(0);

  // const handleScrollNew = (event) => {
  //   console.log('new scroll');
  //   setScrollTop(event.currentTarget.scrollTop);
  // };

  // if (process.env.NODE_ENV === 'production') {
  //   // Code to run in production environment
  //   console.log('prod');
  // } else {
  //   // Code to run in development environment
  //   console.log('dev');
  // }

  // accessibility axe
  // if (process.env.NODE_ENV === 'development') {
  //   axe(React, ReactDOM, 1000); // Configure and initialize the package
  // }

  useEffect(() => {
    if (i18n.language === 'he') {
      setIsHebrew(true);
    } else {
      setIsHebrew(false);
    }
  }, []);

  useEffect(() => {
    console.log('useEffect window', window);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      console.log('cleanup');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const handleScroll = () => {
  //   // console.log('Scroll event detected', window.scrollY);

  //   requestAnimationFrame(() => {
  //     const position = window.scrollY;
  //     // const position = window.scrollY;
  //     console.log('position', position);

  //     if (position > 100) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   });
  // };

  const handleScroll = () => {
    const position =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (position > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        console.log('true');
      } else {
        console.log('false');
      }
    });
  }, []);

  // const history = useHistory();

  // const toTop = () => {
  //   const container = document.getElementById('container');
  //   if (container) {
  //     container.scrollTo({ top: 0, behavior: 'smooth' });
  //     // container.scrollTo({ top: 0, behavior: 'smooth', overflowx: 'auto' }); safari
  //   }
  // };

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <Router>
          {/* <ScrollToTopOnPageChange history={history} /> */}
          {/* <ScrollToTop /> */}
          <Header
            t={t}
            isHebrew={isHebrew}
            setIsHebrew={setIsHebrew}
            toTop={toTop}
            // handleLanguageChange={handleLanguageChange}
          />
          <main id="container" className="main-content" onScroll={handleScroll}>
            <Switch>
              <Route path="/" exact component={HomeScreen} />
              <Route path="/development" component={Development} />
              <Route path="/design" component={Design} />
              <Route path="/about" component={About} />
              <Route path="/projectDetails/:slug" component={ProjectDetails} />
            </Switch>
            {isScrolled && (
              <button
                className="top"
                onClick={() => {
                  // console.log('to top');
                  toTop();
                }}
              >
                top
              </button>
            )}
          </main>
          <Footer />
        </Router>
      </LanguageProvider>
    </I18nextProvider>
  );
}

// App.propTypes = {
//   // t: PropTypes.func.isRequired,
//   history: PropTypes.object.isRequired,
// };

export default App;
