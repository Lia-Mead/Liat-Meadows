import { useState, useEffect } from 'react';
import NavBar from './navBar';
import BurgerMenu from '../ui/burgerMenu';

import close from '../assets/icons/close.svg';
import burger from '../assets/icons/burger.svg';
import Logo from '../components/logo';

import { Link } from 'react-router-dom';

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [mQuery, setMQuery] = useState();
  const [screenSize, setScreenSize] = useState(window.innerWidth);

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

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Close the burger menu when screenSize is less than 900
    if (screenSize < 900) {
      setBurgerOpen(false);
    }
  }, [screenSize]);

  const updateSize = () => {
    // console.log("size updated");
    let mql = window.matchMedia('(max-width: 1074px)');
    setMQuery(mql.matches);
    // console.log(mql.matches); // true or false
  };

  const toggleBurgerMenu = () => {
    // console.log("toggle open");
    setBurgerOpen(!burgerOpen);
  };

  let src;
  burgerOpen ? (src = close) : (src = burger);

  return (
    <>
      <header className="header">
        <Link to="/">
          <Logo onClick={toggleBurgerMenu} />
        </Link>

        <div className="menu-right">
          {screenSize < 900 || mQuery ? (
            <img onClick={toggleBurgerMenu} className="navbar-icon" src={src} />
          ) : (
            <NavBar />
          )}
        </div>
      </header>

      {burgerOpen ? <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} /> : null}
    </>
  );
}
