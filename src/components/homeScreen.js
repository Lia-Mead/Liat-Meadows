import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Development from './development';
import Design from './design';
import About from './about';
import { getDesignProjects } from '../data/designProjectsData';
import { getDevelopmentProjects } from '../data/developmentProjectsData';
import '../styles/homeScreen.scss';
import { useEffect } from 'react';

const HomeScreen = ({ toTop }) => {
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';

  const designProjects = getDesignProjects(t);
  const devProjects = getDevelopmentProjects(t);

  return (
    <div id="home" className={`con home ${isHebrew ? 'rtl-text' : 'ltr-text'}`}>
      <div className="stage">
        <h1>{t('liat_meadows')}</h1>

        <h2>{t('development_and_design')}</h2>
        <h3 className="animate-character">
          {t('home_slogan')} <br />
          {t('home_slogan2')}
        </h3>
      </div>
      <Development
        t={t}
        isHebrew={isHebrew}
        projectArray={devProjects}
        onClick={toTop}
      />
      <Design
        t={t}
        isHebrew={isHebrew}
        projectArray={designProjects}
        onClick={toTop}
      />
      <About t={t} isHebrew={isHebrew} onClick={toTop} />
    </div>
  );
};

HomeScreen.propTypes = {
  toTop: PropTypes.func,
};

export default HomeScreen;
