import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const CustomCard = ({ className, float, children, ...rest }) => {
  return (
    <div
      className={classnames(
        styles.card,
        styles.card,
        { [styles.float]: float },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

CustomCard.propTypes = {
  className: PropTypes.string,
  float: PropTypes.bool,
  children: PropTypes.node,
};

export default CustomCard;
