// vue.config.js
module.exports = {
  // options...
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  assetsDir: '',
  filenameHashing: true,
  productionSourceMap: false,
  pages: {
    'index': {
      entry: './src/pages/lessons/main.js',
      template: "public/index.html",
      title: "Home",
      chunks: ["chunk-vendors", "chunk-common", 'index']
    },
    'easyHomeWork': {
      entry: './src/pages/easy-homework/main.js',
      template: "public/index.html",
      title: "easy homework",
      chunks: ["chunk-vendors", "chunk-common", 'easyHomeWork']
    },
    'homeWork':{
      entry: './src/pages/homework/main.js',
      template: "public/index.html",
      title: "homework",
      chunks: ["chunk-vendors", "chunk-common", 'homeWork']
    }
  }
}
