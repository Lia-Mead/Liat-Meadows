import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './ProjectCardGallery/styles.module.scss';

const OpenGallery = ({ photos, className }) => {
  const photosSorted = [
    photos.gif,
    photos.image1,
    photos.image2,
    photos.image3,
    photos.image4,
  ].filter(Boolean);

  return (
    <>
      {photos.map((photo, index) => (
        <img
          key={`project-image-${index + 1}`}
          className="image"
          src={photo}
          alt={`Project ${index + 1}`}
        />
      ))}
    </>
  );
};

OpenGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default OpenGallery;
