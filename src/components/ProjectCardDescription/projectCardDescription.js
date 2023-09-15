import React, { useState } from 'react';

import styles from './styles.module.scss';
import PropTypes from 'prop-types';
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

  const [showFullContent, setShowFullContent] = useState(false);

  const content = description;

  const displayContent = showFullContent
    ? content
    : `${content.slice(0, 50)}...`;

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
        {displayContent}
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
          window.scrollTo(0, 0);
          setShowFullContent(true);
        }}
      >
        <button className={buttonStyle()} disabled={!isButtonActive}>
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
};

export default ProjectCardDescription;
