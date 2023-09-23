// import React from 'react';
// import PropTypes from 'prop-types';
// import cx from 'classnames';

// import styles from './styles.module.scss';

// const GalleryToggle = ({ icon, action, left = false, right = false }) => (
//   <div
//     className={cx(styles['gallery-toggle'], {
//       [styles['left']]: left,
//       [styles['right']]: right,
//     })}
//     onClick={action}
//     onKeyDown={(e) => {
//       if (e.key === 'Enter' || e.key === ' ') {
//         action();
//       }
//     }}
//     role="button"
//     aria-label="Clickable Element"
//     tabIndex="0"
//   >
//     {icon}
//   </div>
// );

// GalleryToggle.propTypes = {
//   icon: PropTypes.string.isRequired,
//   action: PropTypes.func.isRequired,
//   left: PropTypes.bool,
//   right: PropTypes.bool,
// };

// export default GalleryToggle;

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './styles.module.scss';

const GalleryToggle = ({ icon, action, left = false, right = false }) => (
  <button
    className={cx(styles['gallery-toggle'], {
      [styles['left']]: left,
      [styles['right']]: right,
    })}
    onClick={action}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        action();
      }
    }}
    tabIndex="0" // Keep tabindex for keyboard accessibility
  >
    {icon}
  </button>
);

GalleryToggle.propTypes = {
  icon: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

export default GalleryToggle;
