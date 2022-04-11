const { defineConfig } = require('@vue/cli-service')
module.exports = {
  runtimeCompiler:true
}
defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})
