import { useTranslation } from 'react-i18next';

import Avatar from '../assets/images/liatm.jpg';
import StackIcon from '../assets/icons/stack.svg';

const About = () => {
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';

  return (
    <div
      id="about"
      className={`about-container ${isHebrew ? 'rtl-text' : 'ltr-text'}`}
    >
      <div className="box">
        <h1>
          <a href="#about">{t('about')}</a>
        </h1>
        <div className="text-box">
          <div className="text-con">
            <p>{t('about_para_1_1')}</p>
            <p>
              {' '}
              {t('about_para_1_1_1')}
              <strong className="highlight">{t('about_para_1_2')}</strong>
              {t('about_para_1_3')}
              <strong className="highlight">{t('about_para_1_3_1')}</strong>
              {t('about_para_1_3_2')}
            </p>
            <p>{t('about_para_2_1')}</p>
            <p>
              {t('about_para_3_1')}
              <strong className="highlight">{t('about_para_3_2')}</strong>
            </p>
            <br />
            <p>{t('about_para_4_1')}</p>
            <br />
            <br />
            <img className="icon" src={StackIcon} alt="lia-meadows" />
            <div className='pill-box'>
              <button className="pill">JavaScript</button>
              <button className="pill">HTML5</button>
              <button className="pill">CSS</button>
              <button className="pill">SASS</button>
              <button className="pill">Node.js</button>
              <button className="pill">Redux</button>
              <button className="pill">Bootstrap</button>
              <button className="pill">Git</button>
              <button className="pill">GitHub</button>
              <button className="pill">jQuery</button>
              <button className="pill">Wordpress</button>
              <button className="pill">Socket.IO</button>
              <button className="pill">Socket.IO</button>
              <button className="pill">Sketch</button>
              <button className="pill">Adobe Creative Suite</button>
            </div>

            {/* <p>
              JavaScript &#8226; HTML5 &#8226; CSS &#8226; SASS &#8226; Node.js
              &#8226; Express &#8226; React-Native &#8226; React.js &#8226;
              Redux &#8226; Bootstrap &#8226; Git &#8226; GitHub &#8226; jQuery
              &#8226; Wordpress &#8226; Socket.IO &#8226; Sketch &#8226; Adobe
              Creative Suite
            </p> */}
          </div>
        </div>

        <div className={'avatar-box'}>
          <img className="avatar" src={Avatar} alt="lia-meadows" />
        </div>
      </div>
    </div>
  );
};

export default About;
