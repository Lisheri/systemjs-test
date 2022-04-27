module.exports = {
  webpack: (config) => {
    config.output.library = 'reactApp';
    config.output.libraryTarget = 'umd';
    config.output.publicPath = "//localhost:7070/"
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      // config.prot = '7070'
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      }
      return config;
    }
  }
}