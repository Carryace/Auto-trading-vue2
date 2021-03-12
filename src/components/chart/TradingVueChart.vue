<template>
  <div>
    <trading-vue
      :data="chart"
      :overlays="overlays"
      :color-back="colors.colorBack"
      :color-grid="colors.colorGrid"
      :color-text="colors.colorText">
    </trading-vue>
  </div>
</template>

<script>

import TradingVue from 'trading-vue-js'
import Data from '../../data/data.json'
import PerfectTrades from '../../mixins/PerfectTrades'

export default {
  name: 'AT-chart',
  components: { TradingVue },
  data() {
    return {
        chart: Data,
        width: 1000,
        height: 600,
        colors: {
            colorBack: '#fff',
            colorGrid: '#eee',
            colorText: '#333',
        },
        overlays: [PerfectTrades]
    }
  }
}

</script>