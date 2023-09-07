import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                welcome: "Welcome to my app",
                greeting: "Hello, {{name}}!",
            },
        },
        fr: {
            translation: {
                welcome: "Bienvenue dans mon application",
                greeting: "Bonjour, {{name}} !",
            },
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false, // React already escapes values
    },
});

export default i18n;
