import path from "path-browserify";
import { ModuleFederationPlugin } from "webpack/container";

export default {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    publicPath: "auto",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      path: "path-browserify", // Polyfill for path
    },
  },
  devServer: {
    port: 3000,
    static: "./dist",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {},
      exposes: {},
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ],
};
