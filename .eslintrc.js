// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],

    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["react", "react-hooks"],
    rules: {
        "no-unused-vars":
            // eslint-disable-next-line no-undef
            process.env.NODE_ENV === "production" ? "error" : "off",
        "react/react-in-jsx-scope": "off",
        //add customize rules here as per your project's needs
    },
};
