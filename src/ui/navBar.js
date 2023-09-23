import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { BrowserRouter, Link } from 'react-router-dom';

import LanguageSwitch from '../components/LanguageSwitch';

// import { Nav, NavLink } from '../components/navElements';

const Navbar = ({
  t,
  setIsHebrew,
  setIsEnglish,
  setIsGerman,
  isHebrew,
  toTop,
}) => {
  return (
    <div className="nav-con">
      <nav className="nav-button" role="navigation">
        <ul className={`nav-menu ${isHebrew ? 'rtl-text' : 'ltr-text'}`}>
          <li className="nav-link">
            <Link to="/development" onClick={toTop}>
              {t('about_development')}
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/design" onClick={toTop}>
              {t('about_design')}
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/about" onClick={toTop}>
              {t('about_about')}
            </Link>
          </li>
        </ul>
        <LanguageSwitch
          setIsHebrew={setIsHebrew}
          setIsGerman={setIsGerman}
          setIsEnglish={setIsEnglish}
        />
      </nav>
    </div>

    // <div className="nav-con">
    //   <Nav className="nav" role="menu">
    //     <div className={`nav-menu ${isHebrew ? 'rtl-text' : 'ltr-text'}`}>
    //       <NavLink to="/development" onClick={toTop}>
    //         {t('about_development')}
    //       </NavLink>
    //       <NavLink to="/design" onClick={toTop}>
    //         {t('about_design')}
    //       </NavLink>
    //       <NavLink to="/about" onClick={toTop}>
    //         {t('about_about')}
    //       </NavLink>
    //     </div>
    //     <LanguageSwitch
    //       setIsHebrew={setIsHebrew}
    //       setIsGerman={setIsGerman}
    //       setIsEnglish={setIsEnglish}
    //     />
    //   </Nav>
    // </div>
  );
};

Navbar.propTypes = {
  t: PropTypes.func.isRequired,
  setIsHebrew: PropTypes.func.isRequired,
  setIsEnglish: PropTypes.func.isRequired,
  setIsGerman: PropTypes.func.isRequired,
  toTop: PropTypes.func,
  isHebrew: PropTypes.bool.isRequired,
};

export default withTranslation()(Navbar);
