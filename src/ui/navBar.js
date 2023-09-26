import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import LanguageSwitch from '../components/LanguageSwitch';

const Navbar = ({ toTop }) => {
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';
  return (
    <div className="nav-con">
      <nav className="nav-button" role="navigation">
        <ul className={`nav-menu ${isHebrew ? 'rtl-text' : 'ltr-text'}`}>
          <li className="nav-link">
            <NavLink
              to="/development"
              onClick={toTop}
              activeClassName="active-tab"
            >
              {t('about_development')}
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/design" onClick={toTop} activeClassName="active-tab">
              {t('about_design')}
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/about" onClick={toTop} activeClassName="active-tab">
              {t('about_about')}
            </NavLink>
          </li>
        </ul>

        <LanguageSwitch />
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  toTop: PropTypes.func,
};

export default Navbar;
