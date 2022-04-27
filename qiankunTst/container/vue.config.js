const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '/',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/dy_admin': {
        target: 'http://e-dy-server-feature-mini-dy.community-interaction.dev.inside.xiaoeknow.com',
        changeOrigin: true
      }
    },
    open: true,
    port: 8000,
    openPage: 'index.html'
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"))
  }
}