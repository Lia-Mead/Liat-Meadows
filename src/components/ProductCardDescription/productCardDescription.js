import React from "react";

import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import ProjectDetails from "../projectDetails";
import { Link } from "react-router-dom";

const ProductCardDescription = ({
    title,
    slug,
    description,
    buttonText,
    url,
    stack,
    photos,
    prod,
    isButtonActive = true,
}) => (
    <div className={styles["product-card-description-box"]}>
        <div className={styles["product-card-name"]}>{title}</div>
        <p className={styles["product-card-description"]}>{description}</p>

        <Link
            to={{
                pathname: `/projectDetails/${slug}`,
                state: { title, description, stack, slug, url, photos, prod },
            }}
        >
            <button
                className={
                    isButtonActive
                        ? styles["go-button"]
                        : styles["go-button-disabled"]
                }
                disabled={!isButtonActive}
            >
                {buttonText}
            </button>
        </Link>

        {/* </div> */}

        {/* {buttonText && (
            // <ProjectDetail />

            <div className={styles["row"]}>
                <a
                    className={
                        isButtonActive
                            ? styles["go-button"]
                            : styles["go-button-disabled"]
                    }
                    href={isButtonActive ? url : "#"}
                    // href={isButtonActive ? setIsDetail(true) : "#"}
                    target="_blank"
                    rel="noreferrer"
                >
                    {buttonText}
                </a>
            </div>
        )} */}
    </div>
);

ProductCardDescription.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    url: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    isButtonActive: PropTypes.bool,
    photos: PropTypes.array.isRequired,
    prod: PropTypes.bool.isRequired,
};

export default ProductCardDescription;
