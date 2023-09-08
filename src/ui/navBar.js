import { useState } from 'react';
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

const Navbar = ({ t }) => {
  const [isHebrew, setIsHebrew] = useState(false);
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
        <div className="nav-menu">
          <NavLink to="/development">{t('about_development')}</NavLink>
          <NavLink to="/design">{t('about_design')}</NavLink>
          <NavLink to="/about">{t('about_about')}</NavLink>
        </div>
        <LanguageSwitch setIsHebrew={setIsHebrew} />
      </Nav>
    </div>
  );
};

Navbar.propTypes = {
  t: PropTypes.func.isRequired,
  // setIsHebrew: PropTypes.func.isRequired,
};

export default withTranslation()(Navbar);
