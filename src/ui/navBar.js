import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import LanguageSwitch from '../components/LanguageSwitch';

import {
  Nav,
  NavLink,
  // NavMenu,
  // NavBtn,
  // NavBtnLink,
} from '../components/navElements';

const Navbar = ({ t, setIsHebrew, isHebrew, scrollToTop, toTop }) => {
  // const { t, i18n } = useTranslation();
  // const isHebrew = i18n.language === 'he';
  //   const scrollToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     });
  //   };

  return (
    // <div className={`nav-con ${isHebrew ? 'rtl-text' : 'ltr-text'}`}>
    <div className="nav-con">
      <Nav className="nav">
        <div className={`nav-menu ${isHebrew ? 'rtl-text' : 'ltr-text'}`}>
          <NavLink to="/development" onClick={toTop}>
            {t('about_development')}
          </NavLink>
          <NavLink to="/design" onClick={toTop}>
            {t('about_design')}
          </NavLink>
          <NavLink to="/about" onClick={toTop}>
            {t('about_about')}
          </NavLink>
        </div>
        <LanguageSwitch
          setIsHebrew={setIsHebrew}
          // handleLanguageChange={handleLanguageChange}
        />
      </Nav>
    </div>
  );
};

Navbar.propTypes = {
  t: PropTypes.func.isRequired,
  // handleLanguageChange: PropTypes.func,
  setIsHebrew: PropTypes.func.isRequired,
  scrollToTop: PropTypes.func,
  toTop: PropTypes.func,
  isHebrew: PropTypes.bool.isRequired,
};

export default withTranslation()(Navbar);
