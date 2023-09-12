import React from 'react';

import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import ProjectDetails from '../projectDetails';
import { Link } from 'react-router-dom';

const ProjectCardDescription = ({
  title,
  slug,
  description,
  buttonText,
  url,
  stack,
  photos,
  published,
  isWideCard,
  // toTop,
  isButtonActive = true,
}) => {
  const buttonStyle = () => {
    if (isWideCard) {
      return isButtonActive
        ? `${styles['go-button']} ${styles['go-button-wide']}`
        : styles['go-button-disabled'];
    } else {
      return isButtonActive
        ? styles['go-button']
        : styles['go-button-disabled'];
    }
  };

  return (
    <div className={styles['product-card-description-box']}>
      <div className={styles['product-card-name']}>{title}</div>
      <p
        className={
          isWideCard
            ? `${styles['product-card-description']} ${styles['product-card-description-wide']}`
            : styles['product-card-description']
        }
      >
        {description}
      </p>

      <Link
        to={{
          pathname: `/projectDetails/${slug}`,
          state: {
            title,
            description,
            stack,
            slug,
            url,
            photos,
            published,
          },
        }}
        onClick={() => {
          window.scrollTo(0, 0); // Scroll to the top of the page
        }}
      >
        <button
          className={buttonStyle()}
          disabled={!isButtonActive}
          // onClick={toTop}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

ProjectCardDescription.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  url: PropTypes.string,
  stack: PropTypes.string.isRequired,
  isButtonActive: PropTypes.bool,
  photos: PropTypes.array.isRequired,
  published: PropTypes.bool,
  isWideCard: PropTypes.bool,
  // toTop: PropTypes.func,
};

export default ProjectCardDescription;
