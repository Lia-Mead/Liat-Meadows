import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import NavBar from './navBar';
import BurgerMenu from './burgerMenu';

import close from '../assets/icons/close.svg';
import burger from '../assets/icons/burger.svg';
import Logo from '../components/logo';

import { Link } from 'react-router-dom';

export default function Header({ toTop }) {
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

  return (
    <>
      <header className="header">
        <Link to="/" onClick={toTop}>
          <Logo />
        </Link>

        <div className="menu-con" role="group">
          {screenSize < 900 || mQuery ? (
            <button
              onClick={() => {
                toggleBurgerMenu();
              }}
              className="navbar-icon-box"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleBurgerMenu();
                }
              }}
              aria-labelledby="menubutton"
              aria-label="Toggle Menu"
              tabIndex="0"
            >
              {/* <span aria-hidden="true">&#9776;</span> */}
              <img src={src} alt="menu-burger" className="navbar-icon" />
            </button>
          ) : (
            <NavBar toTop={toTop} />
          )}
        </div>
      </header>

      {burgerOpen ? (
        <BurgerMenu
          toggleBurgerMenu={toggleBurgerMenu}
          burgerOpen={burgerOpen}
          setBurgerOpen={setBurgerOpen}
          toTop={toTop}
        />
      ) : null}
    </>
  );
}

Header.propTypes = {
  toTop: PropTypes.func,
};
