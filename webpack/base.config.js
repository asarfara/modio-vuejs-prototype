const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  plugins: [
    new VueLoaderPlugin()
  ],
  entry: {
    modio: ['./src/styles/main.js', './index.js'],
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
};
