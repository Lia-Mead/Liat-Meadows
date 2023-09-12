import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { v4 as uuidv4 } from 'uuid';

import ProjectCard from '../components/ProjectCard/projectCard';
import ProjectDetails from '../components/projectDetails';
// import { getDesignProjects } from '../data/design-projects';

const Card = ({ projectArray, toTop }) => {
  const { t, i18n } = useTranslation();
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
          buttonText: t('card_button'),
          url: project.url,
          published: project.published,
          isWideCard: project.isWideCard,
          gif,
        };

        return <ProjectCard key={uuidv4()} {...projectData} toTop={toTop} />;
      })}

      {selectedProject && (
        // <ProjectDetails project={selectedProject} />
        <ProjectDetails project={selectedProject} />
      )}
    </>
  );
};

Card.propTypes = {
  projectArray: PropTypes.array.isRequired,
  toTop: PropTypes.func,
};

export default Card;
