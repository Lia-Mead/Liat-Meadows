import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import github from '../assets/icons/github.svg';

const Footer = ({ t }) => {
  return (
    <footer className="footer">
      <div className="footer-box first">
        <p>© Made with ♡ by Liat Meadows 2023</p>
        <a
          className="link-con"
          href="https://www.github.com/Lia-Mead"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={github} alt="github" />
          gitHub
        </a>

        <p>
          <a href="mailto:meadowsliat@gmail.com">meadowsliat@gmail.com</a>
        </p>
      </div>

      <div className="footer-box second">
        <Link className="footer-link" to="/imprint">
          {t('footer_imprint')}
        </Link>
        <Link className="footer-link" to="/accessibility-statement">
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
  t: PropTypes.func.isRequired,
};

export default Footer;
