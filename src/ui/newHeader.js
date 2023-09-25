import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import NavBar from './navBar';
import BurgerMenu from './__burgerMenu';

import close from '../assets/icons/close.svg';
import burger from '../assets/icons/burger.svg';
import Logo from '../components/logo';

import { Link } from 'react-router-dom';

export default function Header({
  t,
  setIsHebrew,
  isHebrew,
  setIsGerman,
  setIsEnglish,
  toTop,
}) {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [mQuery, setMQuery] = useState();
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const updateSize = () => {
    let mql = window.matchMedia('(max-width: 1074px)');
    setMQuery(mql.matches);
  };

  const toggleBurgerMenu = () => {
    setBurgerOpen(!burgerOpen);
  };

  let src;
  burgerOpen ? (src = close) : (src = burger);

  useEffect(() => {
    if (screenSize < 900) {
      // console.log('screenSize', screenSize);
      setBurgerOpen(false);
    }
  }, [screenSize]);

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    setScreenSize(window.innerWidth);
  }, []);

  const menuRef = useRef(null);

  const handleMenuClick = (event) => {
    // Stop propagation to prevent closing when clicking inside the menu.
    event.stopPropagation();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedElement = event.target;

      if (
        menuRef.current &&
        !menuRef.current.contains(clickedElement) &&
        !clickedElement.classList.contains('navbar-icon-box')
        // !clickedElement.classList.contains('navbar-icon')
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
    <>
      <header className="header">
        <Link to="/" onClick={toTop}>
          <Logo />
        </Link>

        <div className="menu-con" role="group">
          {screenSize < 900 || mQuery ? (
            <button
              onClick={(e) => {
                toggleBurgerMenu();
                handleMenuClick(e);
              }}
              className="navbar-icon-box"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleBurgerMenu();
                  handleMenuClick(e);
                }
              }}
              aria-labelledby="menubutton"
              tabIndex="0"
            >
              <img src={src} alt="menu-burger" />
            </button>
          ) : (
            <NavBar
              t={t}
              setIsHebrew={setIsHebrew}
              isHebrew={isHebrew}
              setIsGerman={setIsGerman}
              setIsEnglish={setIsEnglish}
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
          setIsGerman={setIsGerman}
          setIsEnglish={setIsEnglish}
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
  setIsGerman: PropTypes.func.isRequired,
  setIsEnglish: PropTypes.func.isRequired,
  toTop: PropTypes.func,
  isHebrew: PropTypes.bool.isRequired,
};
