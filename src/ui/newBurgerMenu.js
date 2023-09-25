import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import LanguageSwitch from '../components/LanguageSwitch';

export default function BurgerMenu({
  t,
  toggleBurgerMenu,
  setBurgerOpen,
  setIsHebrew,
  setIsGerman,
  setIsEnglish,
  isHebrew,
  toTop,
}) {
  // const menuRef = useRef(null);

  // const handleMenuClick = (event) => {
  //   // Stop propagation to prevent closing when clicking inside the menu.
  //   event.stopPropagation();
  // };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     const clickedElement = event.target;

  //     if (
  //       menuRef.current &&
  //       !menuRef.current.contains(clickedElement) &&
  //       !clickedElement.classList.contains('navbar-icon')
  //     ) {
  //       setBurgerOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [setBurgerOpen]);

  return (
    <nav
      className={`open-nav ${isHebrew ? 'rtl-text' : 'ltr-text'}`}
      // onClick={handleMenuClick}
      // onKeyDown={(e) => {
      //   if (e.key === 'Enter' || e.key === ' ') {
      //     handleMenuClick();
      //   }
      // }}
      role="navigation"
      aria-label="Main navigation"
      id="primary-nav"
    >
      {/* <button
        id="hamburger"
        aria-expanded="false"
        aria-label="Menu"
        ref={menuRef}
        // className={`open-nav ${isHebrew ? 'rtl-text' : 'ltr-text'}`}
        onClick={handleMenuClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleMenuClick();
          }
        }}
      ></button> */}
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

      <LanguageSwitch
        setIsHebrew={setIsHebrew}
        setIsGerman={setIsGerman}
        setIsEnglish={setIsEnglish}
      />
    </nav>
  );
}

BurgerMenu.propTypes = {
  t: PropTypes.func.isRequired,
  toggleBurgerMenu: PropTypes.func.isRequired,
  setBurgerOpen: PropTypes.func.isRequired,
  setIsHebrew: PropTypes.func.isRequired,
  setIsEnglish: PropTypes.func.isRequired,
  setIsGerman: PropTypes.func.isRequired,
  isHebrew: PropTypes.bool.isRequired,
  toTop: PropTypes.func,
};
