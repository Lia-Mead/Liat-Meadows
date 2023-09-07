import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Card from './Card/card';
import ProductCardDescription from '../ProductCardDescription/productCardDescription';
import ProductCardGallery from '../ProductCardGallery/productCardGallery';

import styles from './styles.module.scss';

const ProductCard = ({
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
    <ProductCardGallery photos={photos} />
    <ProductCardDescription
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

ProductCard.propTypes = {
  className: PropTypes.string,
  photos: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  url: PropTypes.string.isRequired,
  published: PropTypes.bool.isRequired,
  isWideCard: PropTypes.bool,
};

export default ProductCard;
