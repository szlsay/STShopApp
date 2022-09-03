const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 5000,
    proxy: {
      '/api': {
        target: 'http://kumanxuan1.f3322.net:8001/',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
