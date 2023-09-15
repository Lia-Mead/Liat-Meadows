import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const OpenSource = ({ isHebrew }) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      id="open-source"
      className={`terms-con ${isHebrew ? 'rtl-text' : 'ltr-text'}`}
    >
      <div className="box">
        <div className="text-content">
          <h1>{t('oss_title')}</h1>
          <p>{t('oss_text_1')}</p>
          <p>@babel/plugin-proposal-private-property-in-object@7.21.11</p>
          <p> @testing-library/jest-dom@5.17.0</p>
          <p>@testing-library/react@13.4.0 </p>
          <p>@testing-library/user-event@13.5.0</p>
          <p>accessibility@4.5.7</p>
          <p>classnames@2.3.2</p>
          <p>i18next@23.5.1</p>
          <p>js-cookie@3.0.5</p>
          <p>react-dom@18.2.0</p>
          <p>react-i18next@13.2.2</p>
          <p>react-icons@4.10.1</p>
          <p>react-router-dom@5.3.4</p>
          <p>react-scripts@5.0.1</p>
          <p>react-ui-cards@2.0.0</p>
          <p>react@18.2.0</p>
          <p>sass@1.66.1</p>
          <p>styled-components@5.3.11</p>
          <p>uuid@9.0.0 </p>
          <p> web-vitals@2.1.4</p>
        </div>
      </div>
    </div>
  );
};

OpenSource.propTypes = {
  isHebrew: PropTypes.func.isRequired,
};

export default OpenSource;
