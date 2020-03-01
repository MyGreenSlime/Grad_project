import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css'
import VueRouter from 'vue-router'
import Dashboard from "./components/Dashboard";
import Prediction from "./components/Prediction";
Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  { path: '/Dashboard', component: Dashboard },
  { path: '/Prediction', component: Prediction}
]
const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
