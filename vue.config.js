module.exports = {
  devServer: {
    proxy: {
      '/test/singleone/manifest.json': {
        target: 'http://121.42.153.1'
      }
    }
  }
}
