<template>
  <div id="app" class="max-w-screen-xl content-center">
    <at-header/>
    <router-view class="mt-8"></router-view>
  </div>
</template>

<script>
import atHeader from './components/header/Header'

export default {
  name: 'App',
  components: {
    atHeader,
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
}
</style>
