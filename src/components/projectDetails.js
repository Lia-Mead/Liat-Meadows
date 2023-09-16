import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';

import OpenGallery from './openGallery';

const ProjectDetails = ({ location, isButtonActive = true }) => {
  const { title, description, stack, url, photos, published } = location.state;
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';

  return (
    <>
      <div className={`detail-con ${isHebrew ? 'rtl-text' : 'ltr-text'}`}>
        <div className="title-box">
          <h1>
            <Link to="/development" className="link">
              {t('detail_project_title_link')}
            </Link>
            <span className="highlight"> / {title}</span>
          </h1>
        </div>
        <div className="box">
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

              {url !== '' && (
                <button
                  className={'button'}
                  onClick={() => {
                    if (isButtonActive) {
                      window.open(url, '_blank');
                    }
                  }}
                >
                  {published
                    ? t('project_button_even_more')
                    : t('project_button_git_hub')}
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
