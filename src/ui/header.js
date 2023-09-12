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

export default function Header({
  t,
  setIsHebrew,
  isHebrew,
  toTop,
  // handleLanguageChange,
}) {
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
      setBurgerOpen(false);
    }
  }, [screenSize]);

  // const updateSize = () => {
  //   let mql = window.matchMedia('(max-width: 1074px)');
  //   setMQuery(mql.matches);
  // };

  const toggleBurgerMenu = ({ changeLanguage }) => {
    // console.log("toggle open");
    setBurgerOpen(!burgerOpen);
  };

  let src;
  burgerOpen ? (src = close) : (src = burger);

  console.log('isHebrew in Header:', isHebrew);

  return (
    <>
      <header className={`header ${isHebrew ? 'rtl-text' : 'ltr-text'}`}>
        {/* <header className="header"> */}
        <Link to="/" onClick={toTop}>
          <Logo />
          {/* <Logo onClick={toggleBurgerMenu} /> */}
        </Link>

        <div className="menu-right">
          {/* <div ref={menuRef} className="menu-right" onClick={handleMenuClick}> */}
          {screenSize < 900 || mQuery ? (
            <img onClick={toggleBurgerMenu} className="navbar-icon" src={src} />
          ) : (
            <NavBar
              t={t}
              setIsHebrew={setIsHebrew}
              isHebrew={isHebrew}
              toTop={toTop}
              // handleLanguageChange={handleLanguageChange}
            />
          )}
        </div>

        {/* <LanguageSwitch setIsHebrew={setIsHebrew} /> */}
      </header>

      {burgerOpen ? (
        <BurgerMenu
          t={t}
          toggleBurgerMenu={toggleBurgerMenu}
          burgerOpen={burgerOpen}
          setBurgerOpen={setBurgerOpen}
          setIsHebrew={setIsHebrew}
          isHebrew={isHebrew}
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
  // handleLanguageChange: PropTypes.func,
};
