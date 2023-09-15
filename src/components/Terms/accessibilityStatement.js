import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const AccessibilityStatement = () => {
  const { t } = useTranslation();
  return (
    <div
      id="accessibility"
      className={`accessibility-con'}`}
      // className={`accessibility-con ${isHebrew ? 'rtl-text' : 'ltr-text'}`}
    >
      <div className="box">
        <div className="text-content">
          <h1>{t('accessibility_statement_title')}</h1>
          <p>{t('accessibility_statement_text_1')}</p>
          <p>{t('accessibility_statement_text_2')}</p>
          <p>{t('accessibility_statement_text_3')}</p>
        </div>
      </div>
    </div>
  );
};

// AccessibilityStatement.propTypes = {
//   isHebrew: PropTypes.bool,
// };

export default AccessibilityStatement;
