<template>
  <div class="mx-10 flex">
    <spec-side-drawer />
    <div class="pl-8 w-4/5">
      <h1 class="text-xl font-bold mb-5">Spec Watcher Analysis & Operator Trades </h1>
      <template v-if="!selectedWatcher || !stockData">
        <div class="text-lg p-3">
          <div class="grid grid-cols-2">
            <div class="rounded-lg border-2 border-gray-200 m-3 p-2">
              <span class="block text-lg text-center mb-2">Operator</span>
              <span class="block text-center">
                <font-awesome-icon
                  :icon="['fas', 'robot']"
                  class="mr-1 text-gray-400 text-5xl">
                </font-awesome-icon>
              </span>
              <p class="text-center text-base p-4">
                Operator can buy or sell stocks based on information from one or multiple watchers
              </p>
            </div>
            <div class="rounded-lg border-2 border-gray-200 m-3 p-2">
              <span class="block text-lg text-center mb-2">Watcher</span>
              <span class="block text-center italic font-bold text-5xl text-gray-400">
                f(x)
              </span>
              <p class="text-center text-base p-4">
                Watchers focus on the movement of stock price analysis and provide signals/indicators for operator
              </p>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <trading-vue-chart :stockData="stockData" :watcherData="watcherData"/>
      </template>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
import TradingVueChart from '../components/chart/TradingVueChart';
import SpecSideDrawer from '../components/drawer/SpecSideDrawer';

export default {
  components: {
    TradingVueChart,
    SpecSideDrawer
  },
  computed: {
    stockData() {
      if (this.selectedWatcher) {
        return this.getStockDataByToken(this.selectedWatcher.raw_data);
      }
      return null;
    },
    watcherData() {
      if (this.selectedWatcher) {
        return this.getWatcherDataByToken(this.selectedWatcher.watcher_data)
      }
      return null;
    },
    ...mapGetters(['getStockDataByToken', 'getWatcherDataByToken']),
    ...mapState({
      selectedWatcher: state => state.watchers.selectedWatcher,
    })
  }
}
</script>