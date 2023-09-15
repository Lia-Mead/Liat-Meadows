import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';

import Card from '../ui/card';

import { getDesignProjects } from '../data/designProjectsData';

const Design = ({ toTop }) => {
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';

  const designProjects = getDesignProjects(t);

  return (
    <div
      id="my-design-projects"
      className={`design-con ${isHebrew ? 'rtl-text' : 'ltr-text'}`}
    >
      <div className="box">
        <h1>
          <a href="#my-design-projects">{t('design_my_design_projects')}</a>
        </h1>

        <div className="cards-box">
          <Card
            t={t}
            projectArray={designProjects}
            isWideCard={true}
            toTop={toTop}
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
