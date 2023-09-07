import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Card from './Card/card';
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
  ...rest
}) => (
  <Card
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
    />
  </Card>
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
};

export default ProjectCard;
