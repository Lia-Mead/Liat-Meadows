import { useState } from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import ProductCard from '../components/ProductCard/productCard';
import ProjectDetails from '../components/projectDetails';

const Card = ({ projectArray }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      {projectArray.map((project) => {
        const filteredPhotos = [
          project.image1,
          project.image2,
          project.image3,
          project.image4,
          project.image5,
          project.gif,
        ].filter((photo) => photo);

        const gif =
          project.gif || typeof project.gif === 'string' ? project.gif : null;

        const projectData = {
          photos: filteredPhotos,
          title: project.title,
          slug: project.slug,
          description: project.description,
          stack: project.stack,
          buttonText: 'More',
          url: project.url,
          published: project.published,
          isWideCard: project.isWideCard,
          gif,
        };

        return <ProductCard key={uuidv4()} {...projectData} />;
      })}

      {selectedProject && <ProjectDetails project={selectedProject} />}
    </>
  );
};

Card.propTypes = {
  projectArray: PropTypes.array.isRequired,
};

export default Card;
