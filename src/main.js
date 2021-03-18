import Vue from 'vue'
import App from './App.vue'
import SpecPage from './pages/SpecPage'
import HomePage from './pages/HomePage'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloudUploadAlt, faFolder, faFolderOpen, faRobot } from '@fortawesome/free-solid-svg-icons'
import { faDotCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { store } from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/assets/styles.css'

library.add(faDotCircle, faFolder, faFolderOpen, faCloudUploadAlt, faRobot)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage },
  { path: '/spec', component: SpecPage},
]

const router = new VueRouter({routes, mode: 'history'});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
