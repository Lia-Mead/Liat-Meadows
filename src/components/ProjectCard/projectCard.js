import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

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
  published,
  isWideCard,
  toTop,
  ...rest
}) => (
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
      published={published}
      isWideCard={isWideCard}
      toTop={toTop}
    />
  </CustomCard>
);

ProjectCard.propTypes = {
  className: PropTypes.string,
  photos: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  url: PropTypes.string,
  published: PropTypes.bool,
  isWideCard: PropTypes.bool,
  toTop: PropTypes.func,
};

export default ProjectCard;
