import axios from 'axios'
import Vue from 'vue'

export const stocksModule = {
  state: {
    rawData: {},
  },
  mutations: {
    updateStockData(state, payload) {
      Vue.set(state.rawData, payload.key, payload.value)
    }
  },
  actions: {
    fetchStock({ commit, state }, stockToken) {
      if (!state.rawData[stockToken]) {
        axios.get(`https://testing-6d04d.firebaseio.com/raw_data/${stockToken}.json`).then(res => {
          const { data } = res.data;
          data.forEach(item => {
            item[0] = new Date(item[0]).getTime();
            item[1] = parseFloat(item[1]);
            item[2] = parseFloat(item[2]);
            item[3] = parseFloat(item[3]);
            item[4] = parseFloat(item[4]);
            item[5] = parseInt(item[5]);
          })
          commit('updateStockData', {
            key: stockToken,
            value: data,
          })
        });
      }
    }
  },
  getters: {
    getStockDataByToken: state => token => state.rawData[token],
  }
}