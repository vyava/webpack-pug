const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const pug = require("pug-loader");
// const webpack = require("webpack");

// const webpackMerge = require("webpack-merge")
const path = require("path");
// const loadPresets = require("./build-utils/loadPresets");
// const modeConfig = (env) => require(`./build-utils/webpack.${env.mode}.js`)(env)

module.exports = () => ({
  // context : "/src",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  devtool: "inline-source-map",
  watch: true,
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true,
          root: path.resolve(__dirname, "src")
        }
      },
      {
        test: /\.ts$/,
        loader: ["babel-loader", "ts-loader"]
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'file-loader' }],
      }
      // {
      //     test: /\.m?js$/,
      //     exclude: /(node_modules|bower_components)/,
      //     use: {
      //         loader: 'babel-loader',
      //         options: {
      //             presets: ['@babel/preset-env'],
      //             plugins: ['@babel/plugin-proposal-object-rest-spread']
      //         }
      //     }
      // }
    ]
  },
  // devServer: {

  //     // host : '0.0.0.0',
  //     // port : '8080',
  //     inline: true,
  //     contentBase: path.join(__dirname, "src")
  // },

  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/index.pug`,
      inlineSource: ".(js|css)$",
      templateParameters: {
        test: "Zafer"
      }
    }),
    new HtmlWebpackInlineSourcePlugin()
  ] // , new webpack.ProgressPlugin()
});
