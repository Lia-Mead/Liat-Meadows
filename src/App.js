import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

// import './nagishli.js';
import i18n from './i18n/i18n';
// import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { LanguageProvider } from './components/LanguageContext';

import { useTranslation } from 'react-i18next';
import ScrollToTop from './components/scrollToTop';
// import NagishLi from './accessibility/nagishli';
// import NagishLiConfig from 'https://www.liatmeadows.com/nagishliconfig.js';

// import { Accessibility } from 'accessibility';

// import axe from 'react-axe';

import HomeScreen from './components/homeScreen';
import Header from './ui/header';
import About from './components/about';
import Footer from './ui/footer';
import Design from './components/design';
import Development from './components/development';
import ProjectDetails from './components/projectDetails';
import AccessibilityStatement from './components/Terms/accessibilityStatement';
import Imprint from './components/Terms/imprint';
import OpenSource from './components/Terms/openSource';
import './styles/App.scss';

function App() {
  const { t } = useTranslation();
  const [isHebrew, setIsHebrew] = useState(false);
  const [isGerman, setIsGerman] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isAccessibility, setIsAccessibility] = useState(true);

  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);

  const ReactDOM = require('react-dom');

  // const { switchLanguage } = useLanguage();

  // useEffect(() => {
  //   if (i18n.language === 'he') {
  //     setIsHebrew(true);
  //   } else {
  //     setIsHebrew(false);
  //   }

  //   // if (i18n.language === 'de') {
  //   //   setIsGerman(true);
  //   // } else {
  //   //   setIsGerman(false);
  //   // }

  //   // if (i18n.language === 'en') {
  //   //   setIsEnglish(true);
  //   // } else {
  //   //   setIsEnglish(false);
  //   // }
  // }, []);

  // useEffect(() => {
  //   const script = document.createElement('script');

  //   script.src = NagishLi;
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // useEffect(() => {
  //   const script = document.createElement('script');

  //   script.src = 'https://www.liatmeadows.com/nagishliconfig.js';
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  if (process.env.NODE_ENV !== 'production') {
    const axe = require('@axe-core/react');
    axe(React, ReactDOM, 1000);
  }

  useEffect(() => {
    // console.log('useEffect window', window);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // console.log('cleanup');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (position > 400) {
      setIsScrolled(true);
      // document.getElementsByClassName('.footer').style.display = 'block';
      // document.querySelector('.footer').style.display = 'block';
    } else {
      setIsScrolled(false);
      // document.getElementsByClassName('.footer').style.display = 'none';
      // document.querySelector('.footer').style.display = 'none';
    }
  };

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Add a scroll event listener to track scrolling
    const handleScroll = () => {
      // Calculate the height of the page content
      const pageHeight = document.documentElement.scrollHeight;

      // Calculate the current scroll position and viewport height
      const scrollPosition = window.scrollY + window.innerHeight;

      // Check if the user has scrolled to the bottom of the page
      if (scrollPosition >= pageHeight) {
        setHasScrolledToBottom(true);
      } else {
        setHasScrolledToBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // document.getElementsByClassName(
  //   '._access-menu ._menu-close-btn'
  // ).style.display = 'block';

  // useEffect(() => {
  //   let options = {
  //     session: {
  //       persistent: false,
  //     },
  //   };

  //   window.addEventListener(
  //     'load',
  //     function () {
  //       new Accessibility(options);
  //     },
  //     false
  //   );

  //   if (i18n.language === 'en') {
  //     options.labels = {
  //       resetTitle: 'reset',
  //       closeTitle: 'close',
  //       menuTitle: 'title',
  //       increaseText: 'increase text size',
  //       decreaseText: 'decrease text size',
  //       increaseTextSpacing: 'increase text spacing',
  //       decreaseTextSpacing: 'decrease text spacing',
  //       increaseLineHeight: 'increase line height',
  //       decreaseLineHeight: 'decrease line height',
  //       invertColors: 'invert colors',
  //       grayHues: 'gray hues',
  //       underlineLinks: 'underline links',
  //       bigCursor: 'big cursor',
  //       readingGuide: 'reading guide',
  //       textToSpeech: 'text to speech',
  //       speechToText: 'speech to text',
  //       disableAnimations: 'disable animations',
  //     };
  //     options.textToSpeechLang = 'en-US';
  //   } else if (i18n.language === 'de') {
  //     options.labels = {
  //       resetTitle: 'zurücksetzen',
  //       closeTitle: 'schließen',
  //       menuTitle: 'Titel',
  //       increaseText: 'Textgröße erhöhen',
  //       decreaseText: 'Textgröße verringern',
  //       increaseTextSpacing: 'Erhöhen Sie den Textabstand',
  //       decreaseTextSpacing: 'Verringern Sie den Textabstand',
  //       increaseLineHeight: 'Zeilenhöhe erhöhen',
  //       decreaseLineHeight: 'Zeilenhöhe verringern',
  //       invertColors: 'Farben umkehren',
  //       grayHues: 'Grautöne',
  //       underlineLinks: 'Links unterstreichen',
  //       bigCursor: 'großer Cursor',
  //       readingGuide: 'Leseführer',
  //       textToSpeech: 'Text zu Sprache',
  //       speechToText: 'Rede zum Text',
  //       disableAnimations: 'Animationen deaktivieren',
  //     };
  //     options.textToSpeechLang = 'de-DE';
  //   } else if (i18n.language === 'he') {
  //     options.labels = {
  //       resetTitle: 'אִתחוּל',
  //       closeTitle: 'סגור',
  //       menuTitle: 'כותרת',
  //       increaseText: 'הגדלת גודל טקסט',
  //       decreaseText: 'הקטנת גודל טקסט',
  //       increaseTextSpacing: 'הגדלת רווח למלל',
  //       decreaseTextSpacing: 'הקטנת רווח למלל',
  //       increaseLineHeight: 'הגדלת רווח בין השורות',
  //       decreaseLineHeight: 'הקטנת רווח בין השורות',
  //       invertColors: 'היפוך צבעים',
  //       grayHues: 'גוונים אפורים',
  //       underlineLinks: 'הדגשת קישורים בקו תחתון',
  //       bigCursor: 'סמן גדול',
  //       readingGuide: 'מדריך קריאה',
  //       textToSpeech: 'טקסט להקראה',
  //       speechToText: 'הכתבת טקסט',
  //       disableAnimations: 'ביטול אנימציה',
  //     };
  //     options.textToSpeechLang = 'he-IS';
  //   }

  //   if (i18n.language === 'en') {
  //     window.nl_lang = 'en';
  //   } else if (i18n.language === 'de') {
  //     window.nl_lang = 'de';
  //   } else if (i18n.language === 'he') {
  //     window.nl_lang = 'he';
  //   }
  //   // window.nl_lang = i18n.language === 'en' ? 'en' : 'other-language';
  //   window.nl_pos = 'bl';
  //   window.nl_compact = '1';
  //   window.nl_accordion = '1';
  //   window.nl_contact = 'n:Liat Meadows|u:meadowsliat+d:gmail.com';

  //   // ... (set up options and language based on your requirements)

  //   const accessibilityInstance = new Accessibility(options);

  //   // Function to close the accessibility addon
  //   const closeAccessibility = () => {
  //     // Find the accessibility addon container element
  //     const accessibilityContainer =
  //       document.querySelector('._access-container');

  //     // Check if the container element exists
  //     if (accessibilityContainer) {
  //       // Hide the container element to close the addon
  //       accessibilityContainer.style.display = 'none';
  //     }
  //   };

  //   // Event listener for the close button
  //   const closeButton = document.querySelector(
  //     '._access-menu ._menu-close-btn'
  //   );
  //   if (closeButton) {
  //     closeButton.addEventListener('click', closeAccessibility);
  //   }

  //   // Cleanup: Remove the event listener when the component unmounts
  //   return () => {
  //     if (closeButton) {
  //       closeButton.removeEventListener('click', closeAccessibility);
  //     }
  //   };
  // }, [isHebrew, isEnglish, isGerman]);

  // useEffect(() => {
  //   const accessibilityButton = document.querySelector(
  //     '._access-icon.material-icons',
  //     '._access-icon.material-icons._access',
  //     ''
  //   );

  //   if (isAccessibility) {
  //     accessibilityButton.style.display = 'block';
  //   } else {
  //     accessibilityButton.style.display = 'none';
  //   }
  // }, [isAccessibility]);

  // const hideAccessibility = () => {
  //   setIsAccessibility(false);
  // };

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="wrapper">
            <Header
              t={t}
              isHebrew={isHebrew}
              setIsHebrew={setIsHebrew}
              setIsGerman={setIsGerman}
              setIsEnglish={setIsEnglish}
              toTop={toTop}
            />
            <main
              id="container"
              className={`main-content ${isScrolled ? 'is-scrolled' : ''} ${
                isHebrew ? 'rtl-text' : 'ltr-text'
              }`}
              onScroll={handleScroll}
            >
              <Switch>
                <Route path="/" exact component={HomeScreen} />
                <Route path="/development" component={Development} />
                <Route path="/design" component={Design} />
                <Route path="/about" component={About} />
                <Route
                  path="/projectDetails/:slug"
                  component={ProjectDetails}
                />
                <Route
                  path="/accessibility-statement"
                  component={AccessibilityStatement}
                />
                <Route path="/imprint" component={Imprint} />
                <Route path="/open-source" component={OpenSource} />
              </Switch>

              {isScrolled && (
                <button
                  className="top"
                  onClick={() => {
                    toTop();
                  }}
                >
                  {t('button_up')}
                </button>
              )}

              {/* {isAccessibility && (
                <button
                  className="accessibility-question"
                  onClick={hideAccessibility}
                >
                  hide accessibility
                </button>
              )} */}
            </main>

            {hasScrolledToBottom ? <Footer t={t} isHebrew={isHebrew} /> : null}
          </div>
        </Router>
      </LanguageProvider>
    </I18nextProvider>
  );
}

export default App;
