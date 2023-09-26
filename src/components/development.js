import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Card from '../ui/card';
import { getDevelopmentProjects } from '../data/developmentProjectsData';

const Development = ({ toTop }) => {
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';

  const devProjects = getDevelopmentProjects(t);

  return (
    <div
      id="my-dev-projects"
      className={`development-con ${isHebrew ? 'rtl-text' : 'ltr-text'}`}
    >
      <div className="box">
        <h1>
          <a href="#my-dev-projects">
            {t('development_my_development_projects')}
          </a>
        </h1>
        <div className={'cards-box'}>
          <Card projectArray={devProjects} isWideCard={false} toTop={toTop} />
        </div>
      </div>
    </div>
  );
};

Development.propTypes = {
  projectArray: PropTypes.array,
  isWideCard: PropTypes.bool,
  toTop: PropTypes.func,
};

export default Development;
