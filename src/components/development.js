import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
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
        <h2>
          <a href="#my-dev-projects">
            {t('development_my_development_projects')}
          </a>
        </h2>
        <div className={'cards-box'}>
          <Card
            t={t}
            projectArray={devProjects}
            isWideCard={false}
            toTop={toTop}
          />
        </div>
      </div>
    </div>
  );
};

Development.propTypes = {
  projectArray: PropTypes.array,
  isWideCard: PropTypes.bool,
  toTop: PropTypes.func,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Development);
