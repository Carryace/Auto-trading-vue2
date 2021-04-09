import Vuex from 'vuex'
import Vue from 'vue'
import VuexPersist from 'vuex-persist'

import { stocksModule } from "./modules/stocks";
import { watchersModule } from "./modules/watchers";
import { authModule } from './modules/auth';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'auto-trading',
  storage: window.localStorage
})

export const store = new Vuex.Store({
  modules: {
    watchers: watchersModule,
    stocks: stocksModule,
    auth: authModule,
  },
  plugins: [vuexPersist.plugin]
});