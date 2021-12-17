const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // Change to static dir, and change route createWebHistory
  publicPath: '/static/backend/',

  // Output to app static directory
  outputDir: '../backend/static/backend/',

  //relative to outputDir
  indexPath: '../../templates/backend/index.html',

  assetsDir: '',

  // Django will hash file names, not webpack
  filenameHashing: false,

  // See: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: true,

  devServer: {
    devMiddleware: {
      writeToDisk: true, // Write files to disk in dev mode, so Django can serve the assets
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
})
