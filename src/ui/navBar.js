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

const Navbar = ({ t, setIsHebrew, isHebrew }) => {
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
          <NavLink to="/development">{t('about_development')}</NavLink>
          <NavLink to="/design">{t('about_design')}</NavLink>
          <NavLink to="/about">{t('about_about')}</NavLink>
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
  isHebrew: PropTypes.bool.isRequired,
};

export default withTranslation()(Navbar);
