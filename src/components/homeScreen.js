import { useTranslation } from 'react-i18next';

import Development from './development';
import Design from './design';
import About from './about';
// import { useLanguage } from '../components/LanguageContext';
// import { LanguageProvider } from './components/LanguageContext';
// import { useScrollToLocation } from "./srollToLocation";

const HomeScreen = () => {
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';
  // const { isHebrew } = useLanguage();

  return (
    <div className="con home">
      <div className="stage">
        <h1>Liat Meadows</h1>
        <div className="brush">
          <h2 className="brush-text">{t('Web Development & Design')}</h2>
        </div>
        <h3 className={isHebrew ? 'rtl-text' : 'ltr-text'}>
          {t('home-slogan')} <br />
          {t('home-slogan2')}
        </h3>
      </div>
      <Development t={t} isHebrew={isHebrew} />
      <Design t={t} isHebrew={isHebrew} />
      <About t={t} isHebrew={isHebrew} />
    </div>
  );
};

export default HomeScreen;
