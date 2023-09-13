import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import NavBar from './navBar';
import BurgerMenu from '../ui/burgerMenu';
// import LanguageSwitch from '../components/LanguageSwitch';
import { useLanguage } from '../components/LanguageContext';

import close from '../assets/icons/close.svg';
import burger from '../assets/icons/burger.svg';
import Logo from '../components/logo';

import { Link } from 'react-router-dom';

export default function Header({ t, setIsHebrew, isHebrew, toTop }) {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [mQuery, setMQuery] = useState();
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // const { isHebrew } = useLanguage(); // Access the isHebrew state from the context

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  // const scrollToTop = () => {
  //     window.scrollTo({
  //         top: 0,
  //         behavior: "smooth",
  //     });
  // };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize < 900) {
      console.log('screenSize', screenSize);
      setBurgerOpen(false);
    }
  }, [screenSize]);

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    setScreenSize(window.innerWidth);
  }, []);

  const updateSize = () => {
    let mql = window.matchMedia('(max-width: 1074px)');
    setMQuery(mql.matches);
  };

  const toggleBurgerMenu = () => {
    setBurgerOpen(!burgerOpen);
  };

  let src;
  burgerOpen ? (src = close) : (src = burger);

  return (
    <>
      <header className={`header ${isHebrew ? 'rtl-text' : 'ltr-text'}`}>
        {/* <header className="header"> */}
        <Link to="/" onClick={toTop}>
          <Logo />
        </Link>

        <div className="menu-right" role="menu">
          {/* <div ref={menuRef} className="menu-right" onClick={handleMenuClick}> */}
          {screenSize < 900 || mQuery ? (
            <img
              onClick={toggleBurgerMenu}
              className="navbar-icon"
              src={src}
              alt="menu-burger"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleBurgerMenu();
                }
              }}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
              role="menu"
              aria-labelledby="menubutton"
              tabIndex="0"
            />
          ) : (
            <NavBar
              t={t}
              setIsHebrew={setIsHebrew}
              isHebrew={isHebrew}
              toTop={toTop}
            />
          )}
        </div>
      </header>

      {burgerOpen ? (
        <BurgerMenu
          t={t}
          toggleBurgerMenu={toggleBurgerMenu}
          burgerOpen={burgerOpen}
          setBurgerOpen={setBurgerOpen}
          setIsHebrew={setIsHebrew}
          isHebrew={isHebrew}
          toTop={toTop}
        />
      ) : null}
    </>
  );
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
  setIsHebrew: PropTypes.func.isRequired,
  toTop: PropTypes.func,
  isHebrew: PropTypes.bool.isRequired,
};
