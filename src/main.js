// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../node_modules/semantic-ui-css/semantic.min.css' // https://stackoverflow.com/questions/36676215/using-vue-js-with-semantic-ui
import '../node_modules/semantic-ui-calendar/dist/calendar.css'
import './util/underscore-mixins'
import Vue from 'vue'
import App from './App'
import router from './router'
import './styles/main.css'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// Redraw map when resize
// Stylize all
