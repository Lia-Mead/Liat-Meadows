import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  // published,
  isWideCard,
  detailPageButton,
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

  const { t, i18n } = useTranslation();

  const [showFullContent, setShowFullContent] = useState(false);

  const content = t(description);

  const displayContent = showFullContent
    ? content
    : `${content.slice(0, 50)}...`;

  return (
    <div className={styles['product-card-description-box']}>
      <div className={styles['product-card-name']}>{t(title)}</div>
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
            detailPageButton,
          },
        }}
        onClick={() => {
          window.scrollTo(0, 0);
          setShowFullContent(true);
        }}
      >
        <button className={buttonStyle()} disabled={!isButtonActive}>
          {t(buttonText)}
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
  detailPageButton: PropTypes.string,
  isButtonActive: PropTypes.bool,
  photos: PropTypes.array.isRequired,
  // published: PropTypes.bool,
  isWideCard: PropTypes.bool,
};

export default ProjectCardDescription;
