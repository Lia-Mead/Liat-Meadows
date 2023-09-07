import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import OpenGallery from './openGallery';

const ProjectDetails = ({ location, isButtonActive = true }) => {
  const { title, description, stack, url, photos, published } = location.state;

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
                <span className="highlight">Stack: </span>
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
  buttonText: PropTypes.string,
  className: PropTypes.string,
  isButtonActive: PropTypes.bool,
  project: PropTypes.object,
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
};

export default ProjectDetails;
