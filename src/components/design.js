import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';

import { useLanguage } from '../components/LanguageContext';

import Card from '../ui/card';

import { getDesignProjects } from '../data/designProjectsData';
// import { getDesignProjects } from '../data/design-projects'; // Adjust the import path
// import { designProjects } from '../data/design-projects';

const Design = ({ toTop }) => {
  // const { isHebrew } = useLanguage();
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';

  const designProjects = getDesignProjects(t);

  return (
    <div
      id="my-design-projects"
      className={`design-con ${isHebrew ? 'rtl-text' : 'ltr-text'}`}
    >
      <div className="column">
        <div className="brush">
          <h2 className="brush-text">
            <a href="#my-design-projects">{t('design_my_design_projects')}</a>
          </h2>
        </div>

        <div className="cards-box">
          <Card
            t={t}
            projectArray={designProjects}
            isWideCard={true}
            onClick={toTop}
          />
        </div>
      </div>
    </div>
  );
};

Design.propTypes = {
  projectArray: PropTypes.array,
  isWideCard: PropTypes.bool,
  toTop: PropTypes.func,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Design);
