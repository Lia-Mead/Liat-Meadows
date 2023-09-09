import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import LanguageSwitch from '../components/LanguageSwitch';

export default function BurgerMenu({
  t,
  toggleBurgerMenu,
  setBurgerOpen,
  setIsHebrew,
  isHebrew,
}) {
  const menuRef = useRef(null);

  //   const [isHebrew, setIsHebrew] = useState(false);
  console.log('ishebrew burgermenu', isHebrew);

  const handleMenuClick = (event) => {
    // Stop propagation to prevent closing when clicking inside the menu.
    event.stopPropagation();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Click occurred outside of the menu.
        setBurgerOpen(false);
        if (!menuRef.current.contains(event.target.closest('.nav-icon'))) {
          // Click occurred outside of the menu and its child elements (nav-icons).
          setBurgerOpen(false);
        }
      }
    };

    // Attach the event listener when the component mounts.
    document.addEventListener('mousedown', handleClickOutside);

    // Remove the event listener when the component unmounts.
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setBurgerOpen]);

  return (
    <nav
      ref={menuRef}
      className={`open-nav ${isHebrew ? 'rtl-text' : 'ltr-text'}`}
      onClick={handleMenuClick}
    >
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

      <LanguageSwitch setIsHebrew={setIsHebrew} />
    </nav>
  );
}

BurgerMenu.propTypes = {
  t: PropTypes.func.isRequired,
  toggleBurgerMenu: PropTypes.func.isRequired,
  setBurgerOpen: PropTypes.func.isRequired,
  setIsHebrew: PropTypes.func.isRequired,
  isHebrew: PropTypes.bool.isRequired,
};
