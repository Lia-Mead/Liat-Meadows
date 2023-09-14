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
        <h1>{t('oss_title')}</h1>
        <p>{t('oss_text_1')}</p>
      </div>
    </div>
  );
};

OpenSource.propTypes = {
  isHebrew: PropTypes.func.isRequired,
};

export default OpenSource;
