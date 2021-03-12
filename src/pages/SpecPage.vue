<template>
  <div class="mx-10 flex">
    <spec-side-drawer />
    <div class="pl-8">
      <h1 class="text-xl font-bold mb-5">Spec Data Result</h1>
      <trading-vue-chart />
    </div>
  </div>
</template>
<script>
import TradingVueChart from '../components/chart/TradingVueChart';
import SpecSideDrawer from '../components/drawer/SpecSideDrawer';

export default {
  components: {
    TradingVueChart,
    SpecSideDrawer
  }
}
</script>