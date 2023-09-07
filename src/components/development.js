import PropTypes from 'prop-types';

import Card from '../ui/card';

import { devProjects } from '../data/dev-projects';

const Development = () => {
  return (
    <div id="my-dev-projects" className="development-con">
      <div className="box">
        <h2>
          <a href="#my-dev-projects">My development projects</a>
        </h2>
        <div className={'cards-box'}>
          <Card projectArray={devProjects} isWideCard={false} />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  projectArray: PropTypes.array.isRequired,
  isWideCard: PropTypes.bool,
};

export default Development;
