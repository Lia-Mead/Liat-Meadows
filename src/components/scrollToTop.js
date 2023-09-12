import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}

ScrollToTop.propTypes = {
  history: PropTypes.func.isRequired,
};

export default withRouter(ScrollToTop);
