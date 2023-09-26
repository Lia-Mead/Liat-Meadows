import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import CustomCard from './CustomCard/customCard';
import ProjectCardDescription from '../ProjectCardDescription/projectCardDescription';
import ProjectCardGallery from '../ProjectCardGallery/projectCardGallery';

import styles from './styles.module.scss';

const ProjectCard = ({
  className,
  photos,
  title,
  slug,
  description,
  stack,
  buttonText,
  url,
  isWideCard,
  detailPageButton,
  toTop,
  ...rest
}) => {
  // const { t } = useTranslation();
  return (
    <CustomCard
      className={cx(
        styles[isWideCard ? 'product-card-wide' : 'product-card'],
        className
      )}
      {...rest}
    >
      <ProjectCardGallery photos={photos} />
      <ProjectCardDescription
        title={title}
        slug={slug}
        description={description}
        stack={stack}
        buttonText={buttonText}
        url={url}
        photos={photos}
        isWideCard={isWideCard}
        detailPageButton={detailPageButton}
        toTop={toTop}
      />
    </CustomCard>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  photos: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  detailPageButton: PropTypes.string,
  buttonText: PropTypes.string,
  url: PropTypes.string,
  isWideCard: PropTypes.bool,
  toTop: PropTypes.func,
};

export default ProjectCard;
