const webpack = require('webpack');

module.exports = {
  // ... other Webpack config options ...
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  stats: {
    warningsFilter: [/source-map-loader/],
  },
};

// webpack.config.js

// const path = require("path");

// module.exports = {
//     entry: "./src/index.js", // Your main entry file
//     output: {
//         filename: "bundle.js",
//         path: path.resolve(__dirname, "dist"), // Output directory
//     },
//     plugins: [
//         new webpack.DefinePlugin({
//             "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
//         }),
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader",
//                 },
//             },
//         ],
//     },
//     scripts: {
//         start: "webpack --mode development",
//         // ... other scripts ...
//     },
// };
