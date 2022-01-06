const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    // * 打包后的文件名
    filename: 'index.js',
    path: path.join(__dirname, "build"),
    // * 将模块化规范打包为system.js的规范
    libraryTarget: "system"
  },
  devtool: "source-map",
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, "build"),
    // * 要使用history模式的router, 默认情况下刷新页面时, 路由就失效了, 允许开发服务器识别前端路由, 而不是刷到404
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // * "@babel/preset-react" 处理react的jsx语法
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      // * 不需要将打包后的js文件通过script标签的形式引入到html文件中
      inject: false
    })
  ],
  // * 告诉webpack哪些模块不需要打包
  // * 微前端架构中, 需要使用公共的框架, 因此在每一个子应用打包时, 不需要打包前端的UI框架
  externals: [
    "react", "react-dom", "react-router-dom"
  ]
}