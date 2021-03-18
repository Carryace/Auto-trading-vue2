import axios from 'axios';
import Vue from 'vue'

export const watchersModule = {
  state: () => ({
    watcherList: [],
    watcherData: {},
    selectedWatcher: null,
  }),
  mutations: {
    updateWatcherList(state, payload) {
      state.watcherList = payload.list;
    },
    updateWatcherData(state, payload) {
      Vue.set(state.watcherData, payload.key, payload.value);
    },
    selectWatcher(state, payload) {
      state.selectedWatcher = payload;
    }
  },
  actions: { 
    fetchWatchers({ commit }) {
      axios.get('https://testing-6d04d.firebaseio.com/watchers.json').then(res => {
        commit('updateWatcherList', {
          list: Object.keys(res.data).map(key => res.data[key])
        });
      });
    },
    selectWatcher({ commit, dispatch }, watcher) {
      commit('selectWatcher', watcher);
      dispatch('fetchStock', watcher.raw_data);
      axios.get(`https://testing-6d04d.firebaseio.com/watcher_data/${watcher.watcher_data}.json`).then(res => {
        res.data.wdata.forEach(item => {
          item[0] = new Date(item[0]).getTime();
          item[1] = parseFloat(item[1]);
        })
        commit('updateWatcherData', {
          key: watcher.watcher_data,
          value: res.data,
        });
      });
      
    }
  },
  getters: {
    getWatcherDataByToken: state => token => state.watcherData[token],
  }
}