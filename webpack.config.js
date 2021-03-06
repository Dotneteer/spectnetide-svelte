const CopyPkgJsonPlugin = require("copy-pkg-json-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");const path = require("path");

const lodash = require("lodash");

function srcPaths(src) {
  return path.join(__dirname, src);
}

const isEnvProduction = process.env.NODE_ENV === "production";
const isEnvDevelopment = process.env.NODE_ENV === "development";

// #region Common settings
const commonConfig = {
  devtool: isEnvDevelopment ? "source-map" : false,
  mode: isEnvProduction ? "production" : "development",
  output: { path: srcPaths("dist") },
  node: { __dirname: false, __filename: false },
  resolve: {
    alias: {
      "@": srcPaths("src"),
      "@main": srcPaths("src/main"),
      "@models": srcPaths("src/models"),
      "@public": srcPaths("public"),
      "@renderer": srcPaths("src/renderer"),
      "@utils": srcPaths("src/utils")
    },
    extensions: [".mjs", ".js", ".json", ".ts", ],
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: true
          }
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png|svg|ico|icns)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    ]
  }
};
// #endregion

const mainConfig = lodash.cloneDeep(commonConfig);
mainConfig.entry = "./src/main/main.ts";
mainConfig.target = "electron-main";
mainConfig.output.filename = "main.bundle.js";
mainConfig.plugins = [
  new CopyPkgJsonPlugin({
    remove: ["scripts", "devDependencies", "build"],
    replace: {
      main: "./main.bundle.js",
      scripts: { start: "electron ./main.bundle.js" },
      postinstall: "electron-builder install-app-deps"
    }
  })
];

const rendererConfig = lodash.cloneDeep(commonConfig);
rendererConfig.entry = "./src/renderer/main.js";
rendererConfig.target = "electron-renderer";
rendererConfig.output.filename = "renderer.bundle.js";
rendererConfig.resolve.mainFields = ["svelte", "browser", "module", "main"];
rendererConfig.plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "./public/index.html")
  }),
  new MiniCssExtractPlugin({
    filename: "bundle.css"
  })
];

module.exports = [mainConfig, rendererConfig];
