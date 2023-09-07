import { useState } from 'react';
import PropTypes from 'prop-types';
import LanguageSwitch from '../components/LanguageSwitch';

import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from '../components/navElements';

const Navbar = () => {
  const [isHebrew, setIsHebrew] = useState(false);
  //   const scrollToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     });
  //   };

  return (
    <div className="nav-con">
      <Nav className="nav">
        <NavMenu>
          <NavLink to="/development">development</NavLink>
          <NavLink to="/design">design</NavLink>
          <NavLink to="/about">about</NavLink>
        </NavMenu>
        <LanguageSwitch setIsHebrew={setIsHebrew} />
      </Nav>
    </div>
  );
};

// Navbar.propTypes = {
//   setIsHebrew: PropTypes.func.isRequired,
// };

export default Navbar;
