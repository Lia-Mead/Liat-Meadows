import { useTranslation } from 'react-i18next';

import Development from './development';
import Design from './design';
import About from './about';
// import { useScrollToLocation } from "./srollToLocation";

const HomeScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="con home">
      <div className="stage">
        <h1>Liat Meadows</h1>
        <div className="brush">
          <h2 className="brush-text">{t('Web Development & Design')}</h2>
        </div>
        <h3>
          {t('I make websites. Hell pretty websites.')} <br />
          That&apos;s what I do.
        </h3>
      </div>
      <Development />
      <Design />
      <About />
    </div>
  );
};

export default HomeScreen;
