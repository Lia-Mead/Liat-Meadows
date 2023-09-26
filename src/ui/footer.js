// import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import github from '../assets/icons/github.svg';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';

  return (
    <footer className="footer">
      <div className="footer-box first">
        <p>{t('footer_made_with_love')}</p>
        <a
          className="link-con"
          href="https://www.github.com/Lia-Mead"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={github} alt="github" />
        </a>

        <p>
          <a href="mailto:meadowsliat@gmail.com">meadowsliat@gmail.com</a>
        </p>
      </div>

      <div className={`footer-box ${isHebrew ? 'rtl-text' : 'ltr-text'}`}>
        <Link className="footer-link" to="/imprint">
          {t('footer_imprint')}
        </Link>
        <Link
          className="footer-link"
          to="/accessibility-statement"
          // to={{
          //   pathname: '/accessibility-statement',
          //   state: {
          //     scrollToTop: true,
          //   },
          // }}
        >
          {t('footer_accessibility')}
        </Link>

        <Link className="footer-link" to="/open-source">
          {t('footer_open_source')}
        </Link>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  // t: PropTypes.func.isRequired,
  // isHebrew: PropTypes.bool.isRequired,
  // toTop: PropTypes.func,
};

export default Footer;
