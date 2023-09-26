import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import LanguageSwitch from '../components/LanguageSwitch';

const Navbar = ({ toTop }) => {
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';
  return (
    <div className="nav-con">
      <nav className="nav-button" role="navigation">
        <ul className={`nav-menu ${isHebrew ? 'rtl-text' : 'ltr-text'}`}>
          <li className="nav-link">
            <Link to="/development" onClick={toTop}>
              {t('about_development')}
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/design" onClick={toTop}>
              {t('about_design')}
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/about" onClick={toTop}>
              {t('about_about')}
            </Link>
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
