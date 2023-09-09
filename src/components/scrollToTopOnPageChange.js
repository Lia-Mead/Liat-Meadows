// import PropTypes from 'prop-types';

// ScrollToTopOnPageChange.js;
// import { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';

// function ScrollToTopOnPageChange({ history }) {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     };
//   }, [history]);

//   return null;
// }

// ScrollToTopOnPageChange.propTypes = {
//   history: PropTypes.object.isRequired,
// };

// export default withRouter(ScrollToTopOnPageChange);

// ScrollToTopOnPageChange.js

import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

function ScrollToTopOnPageChange({ history }) {
  useEffect(() => {
    console.log('history', history);
    const unlisten = history.listen((location, action) => {
      if (action === 'PUSH') {
        window.scrollTo(0, 0);
      }
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}
ScrollToTopOnPageChange.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(ScrollToTopOnPageChange);
