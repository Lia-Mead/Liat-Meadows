import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Imprint = ({ isHebrew }) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      id="imprint"
      className={`terms-con ${isHebrew ? 'rtl-text' : 'ltr-text'}`}
    >
      <div className="box">
        <div className="text-content">
          <h1>{t('imprint_title')}</h1>
          <p>{t('imprint_text_1')}</p>
          <p>{t('imprint_text_2')}</p>
          <p>{t('imprint_text_3')}</p>
          <p>{t('imprint_text_4')}</p>
        </div>
      </div>
    </div>
  );
};

Imprint.propTypes = {
  isHebrew: PropTypes.func.isRequired,
};

export default Imprint;
