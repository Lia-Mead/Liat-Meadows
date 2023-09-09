import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';

// import { getDesignProjects } from '../data/design-projects'; // Adjust the import path

import OpenGallery from './openGallery';

const ProjectDetails = ({ location, isButtonActive = true }) => {
  const { title, description, stack, url, photos, published } = location.state;
  const { t } = useTranslation();
  // const designProjects = getDesignProjects(t);

  return (
    <>
      <div className="detail-con">
        <div className="box">
          <h2>
            <Link to="/development" className="link">
              Projects
            </Link>
            <span className="highlight"> / {title}</span>
          </h2>

          <div className="stage">
            <div className="text">
              <p>{description}</p>
              <p>
                <span className="highlight">{t('project_stack')}: </span>
                {stack}
              </p>
            </div>

            <div className="gallery-con">
              <OpenGallery className="gallery" photos={photos} />

              {published && (
                <button
                  className={'button'}
                  onClick={() => {
                    if (isButtonActive) {
                      window.open(url, '_blank');
                    }
                  }}
                >
                  {published ? 'even more' : 'to git hub'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProjectDetails.propTypes = {
  t: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  className: PropTypes.string,
  isButtonActive: PropTypes.bool,
  project: PropTypes.object,
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
};

export default withTranslation()(ProjectDetails);
