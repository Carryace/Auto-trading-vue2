import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/database'

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
      firebase.database().ref()
        .child('watchers')
        .get()
        .then(snapshot => {
          if (snapshot.exists()) {
            const res = snapshot.val();
            commit('updateWatcherList', {
              list: Object.keys(res).map(key => res[key])
            });
          }
        });
    },
    selectWatcher({ commit, dispatch }, watcher) {
      commit('selectWatcher', watcher);
      dispatch('fetchStock', watcher.raw_data);
      firebase.database().ref()
        .child('watcher_data')
        .child(watcher.watcher_data)
        .get()
        .then(snapshot => {
          if (snapshot.exists()) {
            const res = snapshot.val();
            res.wdata.forEach(item => {
              item[0] = new Date(item[0]).getTime();
              item[1] = parseFloat(item[1]);
            })
            commit('updateWatcherData', {
              key: watcher.watcher_data,
              value: res,
            });
          }
        });
    }
  },
  getters: {
    getWatcherDataByToken: state => token => state.watcherData[token],
  }
}