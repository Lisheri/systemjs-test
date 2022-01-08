const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    // * 微应用的组织名称
    orgName: "study",
    // * 微应用的名称
    projectName: "test-react-micro",
  });
  return merge(defaultConfig, {
    devServer: {
      port: 9001,
    },
  });
};
