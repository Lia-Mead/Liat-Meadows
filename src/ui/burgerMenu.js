import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import LanguageSwitch from '../components/languageSwitch';

export default function BurgerMenu({
  toggleBurgerMenu,
  setBurgerOpen,

  toTop,
}) {
  const menuRef = useRef(null);

  const { t, i18n } = useTranslation();

  const isHebrew = i18n.language === 'he';

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedElement = event.target;

      if (
        menuRef.current &&
        !menuRef.current.contains(clickedElement) &&
        !clickedElement.classList.contains('navbar-icon')
      ) {
        setBurgerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setBurgerOpen]);

  return (
    <nav
      className={`open-nav ${isHebrew ? 'rtl-text' : 'ltr-text'}`}
      role="navigation"
      aria-label="Main navigation"
      id="primary-nav"
      ref={menuRef}
    >
      <ul>
        <li>
          <NavLink
            className="nav-icon"
            activeClassName="active-b"
            onClick={() => {
              toggleBurgerMenu();
              toTop();
            }}
            exact
            to="/development"
            role="button"
          >
            {t('about_development')}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-icon"
            activeClassName="active-b"
            onClick={() => {
              toggleBurgerMenu();
              toTop();
            }}
            to="/design"
            role="button"
          >
            {t('about_design')}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-icon"
            activeClassName="active-b"
            onClick={() => {
              toggleBurgerMenu();
              toTop();
            }}
            to="/about"
            role="button"
          >
            {t('about_about')}
          </NavLink>
        </li>
      </ul>
      <LanguageSwitch />
    </nav>
  );
}

BurgerMenu.propTypes = {
  toggleBurgerMenu: PropTypes.func.isRequired,
  setBurgerOpen: PropTypes.func.isRequired,
  toTop: PropTypes.func,
};
