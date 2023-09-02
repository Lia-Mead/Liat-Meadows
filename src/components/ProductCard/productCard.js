import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import Card from "./Card/card";
import ProductCardDescription from "../ProductCardDescription/productCardDescription";
import ProductCardGallery from "../ProductCardGallery/productCardGallery";

import styles from "./styles.module.scss";

const ProductCard = ({
    className,
    photos,
    productName,
    description,
    buttonText,
    url,
    ...rest
}) => (
    <Card className={cx(styles["product-card"], className)} {...rest}>
        <ProductCardGallery photos={photos} />
        <ProductCardDescription
            productName={productName}
            description={description}
            buttonText={buttonText}
            url={url}
        />
    </Card>
);

ProductCard.propTypes = {
    className: PropTypes.string,
    photos: PropTypes.array.isRequired,
    productName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    url: PropTypes.string.isRequired,
};

export default ProductCard;
