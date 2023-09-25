// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

// const ResponsiveNav = ({ t, toggleBurgerMenu, toTop }) => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink
//             className="nav-icon"
//             activeClassName="active-b"
//             onClick={() => {
//               toggleBurgerMenu();
//               toTop();
//             }}
//             exact
//             to="/development"
//           >
//             {t('about_development')}
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             className="nav-icon"
//             activeClassName="active-b"
//             onClick={() => {
//               toggleBurgerMenu();
//               toTop();
//             }}
//             to="/design"
//           >
//             {t('about_design')}
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             className="nav-icon"
//             activeClassName="active-b"
//             onClick={() => {
//               toggleBurgerMenu();
//               toTop();
//             }}
//             to="/about"
//           >
//             {t('about_about')}
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// ResponsiveNav.propTypes = {
//   t: PropTypes.func.isRequired,
//   toggleBurgerMenu: PropTypes.func.isRequired,
//   toTop: PropTypes.func,
// };

// export default ResponsiveNav;
