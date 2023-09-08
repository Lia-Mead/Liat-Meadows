import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
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
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <Router>
          <Header t={t} />
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

export default App;

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n/i18n';
// import { useTranslation } from 'react-i18next';

// import HomeScreen from './components/homeScreen';
// import Header from './ui/header';
// import About from './components/about';
// import Footer from './ui/footer';
// import Design from './components/design';
// import Development from './components/development';
// import ProjectDetails from './components/projectDetails';
// import './styles/App.scss';

// function App() {
//   const { t, i18n } = useTranslation();
//   const isHebrew = i18n.language === 'he';

//   return (
//     <>
//       <I18nextProvider i18n={i18n}>
//         <Router>
//           <Header />
//           <div className="main">
//             <Switch>
//               <Route path="/" exact component={HomeScreen} />
//               <Route
//                 path="/development"
//                 component={Development}
//                 isHebrew={isHebrew}
//               />
//               <Route path="/design" component={Design} isHebrew={isHebrew} />
//               <Route path="/about" component={About} isHebrew={isHebrew} />
//               <Route
//                 path="/projectDetails/:slug"
//                 component={ProjectDetails}
//                 isHebrew={isHebrew}
//               />
//             </Switch>
//           </div>
//           <Footer />
//         </Router>
//       </I18nextProvider>
//     </>
//   );
// }

// export default App;
