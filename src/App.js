import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import PropTypes from 'prop-types';

import { LanguageProvider } from './components/LanguageContext';

import HomeScreen from './components/homeScreen';
import Header from './ui/header';
import About from './components/about';
import Footer from './ui/footer';
import Design from './components/design';
import Development from './components/development';
import ProjectDetails from './components/projectDetails';
import './styles/App.scss';

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Header />
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
      </I18nextProvider>
    </>
  );
}
// function App({ setIsHebrew }) {
//   return (
//     <>
//       <I18nextProvider i18n={i18n}>
//         <LanguageProvider setIsHebrew={setIsHebrew}>
//           <Router>
//             <Header setIsHebrew={setIsHebrew} />
//             <div className="main">
//               <Switch>
//                 <Route path="/" exact component={HomeScreen} />
//                 <Route path="/development" component={Development} />
//                 <Route path="/design" component={Design} />
//                 <Route path="/about" component={About} />
//                 <Route
//                   path="/projectDetails/:slug"
//                   component={ProjectDetails}
//                 />
//               </Switch>
//             </div>
//             <Footer />
//           </Router>
//         </LanguageProvider>
//       </I18nextProvider>
//     </>
//   );
// }

// App.propTypes = {
//   setIsHebrew: PropTypes.func.isRequired,
// };

export default App;
