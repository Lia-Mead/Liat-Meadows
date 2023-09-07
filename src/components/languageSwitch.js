import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("de")}>Deutsch</button>
            <button onClick={() => changeLanguage("he")}>עברית</button>
        </div>
    );
};

export default LanguageSwitch;
