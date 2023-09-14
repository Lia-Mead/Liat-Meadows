import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const AccessibilityStatement = ({ isHebrew }) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      id="accessibility"
      className={`terms-con ${isHebrew ? 'rtl-text' : 'ltr-text'}`}
    >
      <div className="box">
        <h1>{t('accessibility_statement_title')}</h1>
        <p>{t('accessibility_statement_text_1')}</p>
        <p>{t('accessibility_statement_text_2')}</p>
        <p>{t('accessibility_statement_text_3')}</p>
      </div>
    </div>
  );
};

AccessibilityStatement.propTypes = {
  // t: PropTypes.func.isRequired,
  isHebrew: PropTypes.func.isRequired,
};

export default AccessibilityStatement;
