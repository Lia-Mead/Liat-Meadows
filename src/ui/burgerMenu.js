import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import LanguageSwitch from '../components/LanguageSwitch';

export default function BurgerMenu({ t, toggleBurgerMenu }) {
  const [isHebrew, setIsHebrew] = useState(false);

  return (
    <nav className={`open-nav ${isHebrew ? 'rtl-text' : 'ltr-text'}`}>
      <NavLink
        className="nav-icon"
        activeClassName="active-b"
        onClick={toggleBurgerMenu}
        exact
        to="/development"
      >
        {t('about_development')}
      </NavLink>

      <NavLink
        className="nav-icon"
        activeClassName="active-b"
        onClick={toggleBurgerMenu}
        to="/design"
      >
        {t('about_design')}
      </NavLink>

      <NavLink
        className="nav-icon"
        activeClassName="active-b"
        onClick={toggleBurgerMenu}
        to="/about"
      >
        {t('about_about')}
      </NavLink>

      {/* <NavLink
        className="nav-icon"
        activeClassName="active-b"
        onClick={toggleBurgerMenu}
        to="/settings"
      >
        settings
      </NavLink> */}

      <LanguageSwitch setIsHebrew={setIsHebrew} />
    </nav>
  );
}

BurgerMenu.propTypes = {
  t: PropTypes.func.isRequired,
  toggleBurgerMenu: PropTypes.func.isRequired,
};
