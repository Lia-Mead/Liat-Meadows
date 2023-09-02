import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import GalleryToggle from "./GalleryToggle/galleryToggle";
import styles from "./styles.module.scss";

const ProductCardGallery = ({ photos }) => {
    const [activeItem, setActiveItem] = useState(0);

    const rotateRight = () => {
        let n = photos.length;
        setActiveItem((((activeItem + 1) % n) + n) % n);
    };

    const rotateLeft = () => {
        let n = photos.length;
        setActiveItem((((activeItem - 1) % n) + n) % n);
    };

    return (
        <div className={styles["product-card-gallery"]}>
            {photos.map((photo, i) => (
                <div
                    key={photo}
                    className={cx(styles["gallery-item"], {
                        [`${styles["active"]}`]: activeItem === i,
                    })}
                    style={{
                        backgroundImage: `url(${photo})`,
                    }}
                />
            ))}
            <GalleryToggle icon=">" action={rotateRight} right />
            <GalleryToggle icon="<" action={rotateLeft} left />
        </div>
    );
};

ProductCardGallery.propTypes = {
    photos: PropTypes.array.isRequired,
};

export default ProductCardGallery;
