// import PropTypes from 'prop-types';

import { Nav, NavLink, NavMenu } from '../components/navElements';

const Navbar = () => {
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
      </Nav>
    </div>
  );
};

// Navbar.propTypes = {
//   scrollToTop: PropTypes.func,
// };

export default Navbar;
