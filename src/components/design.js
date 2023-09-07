import PropTypes from 'prop-types';

import Card from '../ui/card';

import { designProjects } from '../data/design-projects';

const Design = () => {
  return (
    <div id="my-design-projects" className="design-con">
      <div className="column">
        <div className="brush">
          <h2 className="brush-text">
            <a href="#my-design-projects">My design projects</a>
          </h2>
        </div>

        <div className="cards-box">
          <Card projectArray={designProjects} isWideCard={true} />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  projectArray: PropTypes.array.isRequired,
  isWideCard: PropTypes.bool,
};

export default Design;
