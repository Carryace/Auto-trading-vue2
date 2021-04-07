<template>
  <div
    id="app"
    class="max-w-screen-xl content-center"
  >
    <at-header />
    <at-signin-dialog v-if="!userProfile" />
    <router-view
      v-else
      class="mt-8"
    />
  </div>
</template>

<script>
import atHeader from './components/header/Header'
import atSigninDialog from './components/signinDialog/SigninDialog'
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    atHeader,
    atSigninDialog,
  },
  computed: {
    ...mapState({
      userProfile: state => state.auth.profile
    })
  },
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
