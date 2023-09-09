import { useTranslation } from 'react-i18next';

import Development from './development';
import Design from './design';
import About from './about';
import { getDesignProjects } from '../data/designProjectsData';
import { getDevelopmentProjects } from '../data/developmentProjectsData';
// import ScrollToTopOnPageChange from './components/scrollToTopOnPageChange';
import '../styles/homeScreen.scss';
import { useEffect } from 'react';
// import ScrollToTopOnPageChange from './scrollToTopOnPageChange';

const HomeScreen = () => {
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';
  const isGerman = i18n.language === 'de';

  const designProjects = getDesignProjects(t);
  const devProjects = getDevelopmentProjects(t);

  const brushStyle = () => {
    if (isHebrew) {
      return 'brush brush-he';
    } else if (isGerman) {
      return 'brush brush-de';
    }
    return 'brush';
  };

  // const toTop = () => {
  //   window.scrollTo({ top: 0, left: 0 });
  // };

  const toTop = () => {
    const container = document.getElementById('contentContainer');
    if (container) {
      setTimeout(() => {
        container.scrollTop = 0; // Scroll the container to the top
      }, 100); // Adjust the delay as needed (e.g., 100 milliseconds)
    }
  };

  // const toTop = () => {
  //   console.log('doc', window);
  //   const container = document.getElementById('container');
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   });

  // };

  // const toTop = () => {
  //   console.log('doc', window.history.scrollRestoration);
  //   window.scrollTo({ top: 0, left: 0 });
  //   // const container = document.getElementById('contentContainer');
  //   // container.element.scrollIntoView();
  // };

  // const toTop = () => {
  //   const container = document.getElementById('contentContainer');
  //   if (container) {
  //     container.scrollTop = 0;
  //   }
  // };

  return (
    <div className={`con home ${isHebrew ? 'rtl-text' : 'ltr-text'}`}>
      <div className="stage">
        <h1>{t('liat_meadows')}</h1>
        <div className={brushStyle()}>
          <h2 className="brush-text">{t('development_and_design')}</h2>
        </div>
        <h3>
          {t('home_slogan')} <br />
          {t('home_slogan2')}
        </h3>
      </div>
      {/* <ScrollToTopOnPageChange history={history} /> */}
      <Development t={t} isHebrew={isHebrew} projectArray={devProjects} />
      <Design t={t} isHebrew={isHebrew} projectArray={designProjects} />
      <About t={t} isHebrew={isHebrew} />
      <button
        className="top"
        onClick={() => {
          console.log('top');
          toTop();
        }}
      >
        top
      </button>
    </div>
  );
};

export default HomeScreen;
