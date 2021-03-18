<template>
  <div>
    <template v-if="chartData">
      <trading-vue
        ref="tradingVueChart"
        :overlays="overlays"
        :titleTxt="title"
        :data="chartData"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText">
      </trading-vue>
    </template>
    
  </div>
</template>

<script>

import TradingVue from 'trading-vue-js'
// import Data from '../../data/data.json'
import Inflection from '../../mixins/Inflection'

const generateOnChartItem = {
  line: data => {
    return {
      name: 'MA',
      type: 'EMA',
      data,
      settings: {},
    };
  },
  marker: data => {
    return {
      name: 'MA_Inflection',
      type: "Inflection",
      data,
      settings: {
        'z-index': 5
      },
    }
  }
}

export default {
  name: 'AT-chart',
  components: { TradingVue },
  props: ['stockData', 'watcherData'],
  data() {
    return {
        title: 'AT-chart',
        width: 1000,
        height: 600,
        colors: {
            colorBack: '#fff',
            colorGrid: '#eee',
            colorText: '#333',
        },
        overlays: [Inflection],
    }
  },
  computed: {
    chartData() {
      if (this.stockData) {
        const viewData = {
          chart: {
            type: 'Candles',
            indexBased: true,
            data: this.stockData,
          }
        };
        if (this.watcherData) {
          const {wdata, wdata_type} = this.watcherData;
          viewData.onchart = [];
          viewData.onchart.push(
            generateOnChartItem[wdata_type](wdata),
          );
        }
        return viewData;
      }
      return null;
    }
  },
}

</script>