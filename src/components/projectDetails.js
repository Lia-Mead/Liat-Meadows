import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import Card from "./ProductCard/Card/card";
// import ProductCardDescription from "./ProductCardDescription/productCardDescription";
// import cx from "classnames";
import ProductCardGallery from "./ProductCardGallery/productCardGallery";

import styles from "./ProductCardGallery/styles.module.scss";

const ProjectDetails = ({
    location,
    buttonText,
    className,
    isButtonActive = true,
    ...rest
}) => {
    const { title, description, stack, url, photos, prod } = location.state;

    return (
        <>
            <div className="detail-con">
                <div className="box">
                    <h2>
                        <Link to="/development" className="link">
                            Projects
                        </Link>
                        <span className="highlight"> / {title}</span>
                    </h2>

                    <div className="stage">
                        <div className="text">
                            <p>{description}</p>
                            <p>
                                <span className="highlight">Stack: </span>
                                {stack}
                            </p>

                            <button
                                className={"button"}
                                onClick={() => {
                                    if (isButtonActive) {
                                        window.open(url, "_blank");
                                    }
                                }}
                            >
                                {prod ? "view project" : "to git hub"}
                            </button>
                        </div>
                        <div className="gallery-con">
                            <ProductCardGallery
                                className="gallery"
                                photos={photos}
                            />
                            {/* <img
                                className="image"
                                src={photos[0]}
                                alt="Project Image 1"
                            /> */}
                            {/* <img
                                className="image"
                                src={photos[1]}
                                alt="Project Image 2"
                            /> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="con detail">
                <div className="box">
                    <h3>{title}</h3>
                    <Card
                        className={cx(styles["product-card"], className)}
                        {...rest}
                    >
                        <ProductCardGallery photos={photos} />
                        <ProductCardDescription
                            title={title}
                            description={description}
                            stack={stack}
                            buttonText={buttonText}
                            url={url}
                        />
                    </Card>
                </div>
            </div> */}
        </>
    );
};

ProjectDetails.propTypes = {
    buttonText: PropTypes.string,
    className: PropTypes.string,
    isButtonActive: PropTypes.bool,
    project: PropTypes.object,
    location: PropTypes.shape({
        state: PropTypes.object,
    }),
};

export default ProjectDetails;
