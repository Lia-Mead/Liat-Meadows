import { useTranslation } from 'react-i18next';

import Development from './development';
import Design from './design';
import About from './about';
import { devProjects } from '../data/dev-projects';
import { designProjects } from '../data/design-projects';

const HomeScreen = () => {
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';
  const isGerman = i18n.language === 'de';

  const brushStyle = () => {
    if (isHebrew) {
      return 'brush brush-he';
    } else if (isGerman) {
      return 'brush brush-de';
    }
    return 'brush';
  };

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
      <Development t={t} isHebrew={isHebrew} projectArray={devProjects} />
      <Design t={t} isHebrew={isHebrew} projectArray={designProjects} />
      <About t={t} isHebrew={isHebrew} />
    </div>
  );
};

export default HomeScreen;
