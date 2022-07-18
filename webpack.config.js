const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "./src/ds/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      name: "another-ds-template",
      type: "umd",
    },
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  resolve: {
    alias: {
      "@": [path.resolve(__dirname, "src/ds")],
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: ["css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    port: 3001,
  },
};
