<template>
  <nav class="at-header px-10 pb-2 my-3 flex border-b-2 border-gray-200">
    <h1 class="font-mono text-xl my-2">Auto Trader </h1>
    <ul class="flex ml-12">
      <li
        class="py-2 px-6 rounded-lg border-2 hover:border-gray-500 mr-3"
        :class="appLinkClass('/')">
        <router-link to="/">Trader App</router-link>
      </li>
      <li 
        class="py-2 px-6 rounded-lg border-2 hover:border-gray-500"
        :class="appLinkClass('/spec')">
        <router-link to="spec">Spec App</router-link>
      </li>
    </ul>
  </nav>  
</template>

<script>
export default {
  name: 'AT-header',
  methods: {
    appLinkClass(appPath) {
      return appPath === this.$route.path ? 'border-gray-500' : 'border-white';
    }
  },
}
</script>
