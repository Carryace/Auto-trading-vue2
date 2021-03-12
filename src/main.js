import Vue from 'vue'
import App from './App.vue'
import SpecPage from './pages/SpecPage'
import HomePage from './pages/HomePage'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { faDotCircle, faFolder } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/assets/styles.css'

library.add(faDotCircle, faFolder, faCloudUploadAlt)

Vue.use(VueRouter);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage },
  { path: '/spec', component: SpecPage},
]

const router = new VueRouter({routes, mode: 'history'});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
