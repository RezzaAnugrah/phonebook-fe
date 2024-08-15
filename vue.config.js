const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // host: localhost,
    port: 8181 // Change to your desired port number
  }
})
