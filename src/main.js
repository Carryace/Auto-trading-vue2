import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloudUploadAlt, faFolder, faFolderOpen, faRobot, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faDotCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/assets/styles.css'

import SpecPage from './pages/specPage/SpecPage'
import HomePage from './pages/homePage/HomePage'
import { store } from './store'

library.add(faDotCircle, faFolder, faFolderOpen, faCloudUploadAlt, faRobot, faArrowRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage },
  { path: '/spec', component: SpecPage},
]

const router = new VueRouter({routes, mode: 'history'});

const firebaseConfig = {
  apiKey: "AIzaSyD7JMTWJEGNB1MTm6nBxfkgqozlntXtpkY",
  authDomain: "testing-6d04d.firebaseapp.com",
  databaseURL: "https://testing-6d04d.firebaseio.com",
  projectId: "testing-6d04d",
  storageBucket: "testing-6d04d.appspot.com",
  messagingSenderId: "141901524514",
  appId: "1:141901524514:web:3793d68fc947fa7dee247b"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
