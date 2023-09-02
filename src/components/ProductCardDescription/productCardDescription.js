import React from "react";

import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const ProductCardDescription = ({
    productName,
    description,
    buttonText,
    url,
    isButtonActive = true,
}) => (
    <div className={styles["product-card-description-box"]}>
        <div className={styles["product-card-name"]}>{productName}</div>
        <p className={styles["product-card-description"]}>{description}</p>
        {buttonText && (
            <div className={styles["row"]}>
                <a
                    className={
                        isButtonActive
                            ? styles["buy-button"]
                            : styles["buy-button-disabled"]
                    }
                    href={isButtonActive ? url : "#"}
                    target="_blank"
                    rel="noreferrer"
                >
                    {buttonText}
                </a>
            </div>
        )}
    </div>
);

ProductCardDescription.propTypes = {
    productName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    url: PropTypes.string.isRequired,
    isButtonActive: PropTypes.func,
};

export default ProductCardDescription;
