import Vue from 'vue'
import App from './src/App'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
