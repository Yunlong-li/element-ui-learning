const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  devServer: {
    // 第一种
    // proxy:'http://localhost:8080'

    // 第二种
    proxy: {
      '/api': {
        target: 'http://localhost:8099/',
        pathRewrite: {
          '^/api': ''
        },
        ws: true,  // 用于支持WebSocket
        changeOrigin: true  // 用于控制请求头中的host值
      },
      // '/demo': {
      //   target: 'http://localhost:5001',
      //   pathRewrite: {
      //     '^/demo': ''
      //   },
      //   ws: true,  // 用于支持WebSocket
      //   changeOrigin: true  // 用于控制请求头中的host值
      // },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
})
