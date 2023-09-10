import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

function ScrollToTopOnPageChange({ history }) {
  useEffect(() => {
    console.log('ScrollToTopOnPageChange component mounted');
    const unlisten = history.listen((location, action) => {
      if (action === 'PUSH') {
        console.log('Route changed. Scrolling to top.');
        window.scrollTo(0, 0);
      }
    });
    return () => {
      console.log('ScrollToTopOnPageChange component unmounted');
      unlisten();
    };
  }, [history]);

  return null;
}
ScrollToTopOnPageChange.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(ScrollToTopOnPageChange);
