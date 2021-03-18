import Vuex from 'vuex'
import Vue from 'vue'
import { stocksModule } from "./modules/stocks";
import { watchersModule } from "./modules/watchers";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    watchers: watchersModule,
    stocks: stocksModule,
  }
});