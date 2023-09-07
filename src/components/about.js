/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import Avatar from '../assets/images/liat.jpg';
import StackIcon from '../assets/icons/stack.svg';

const About = ({ t, isHebrew }) => {
  return (
    <div id="about" className="about-container">
      <div className="box">
        <h2>
          <a href="#about" className="highlight">
            {t('about')}
          </a>
        </h2>
        <div className="text-box">
          <div className="text-con">
            <p>
              Hi, nice to meet you. My name is Liat. I am an experienced web and
              mobile app developer with a strong focus on{' '}
              <strong className="highlight">React Native</strong> and React. I
              bring with me perennial design work experience as a UI/UX
              specialist. That been said, it is clear why I love CSS and enjoy
              putting much love and care in the details.
            </p>
            <p>
              My journey across tech teams made me keen about giving my design a
              technical perspective. Over the last years I worked for VMZ Berlin
              mbH Operators as a frontend mobile developer where I implemeted
              innovative transportation applications in React Native and became
              very fond of this cross platform framework.
            </p>
            <p>
              I build websites from prototype to production. Creating sketches
              and developing interactive, innovative solutions with a strong
              emphasis on <strong className="highlight">User Experience</strong>
              .
            </p>
            <br />
            <p>I am looking forward to our collaboration.</p>
            <br />
            <br />
            <img className="icon" src={StackIcon} alt="liat-meadows-photo" />
            <p>
              JavaScript &#8226; HTML5 &#8226; CSS &#8226; SASS &#8226; Node.js
              &#8226; Express &#8226; React-Native &#8226; React.js &#8226;
              Redux &#8226; Bootstrap &#8226; Git &#8226; GitHub &#8226; jQuery
              &#8226; Wordpress &#8226; Socket.IO &#8226; Sketch &#8226; Adobe
              Creative Suite &#8226;
            </p>
          </div>
        </div>

        <img className="avatar" src={Avatar} alt="liat-meadows-photo" />
      </div>
    </div>
  );
};

About.propTypes = {
  t: PropTypes.func.isRequired,
  isHebrew: PropTypes.bool.isRequired,
};

export default withTranslation()(About);
