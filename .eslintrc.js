module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "react-hooks"],
    rules: {
        "no-unused-vars":
            process.env.NODE_ENV === "production" ? "error" : "off",
        // process.env.NODE_ENV === "production" ? "error" : "off",
        // Add your custom rules here
    },
};
