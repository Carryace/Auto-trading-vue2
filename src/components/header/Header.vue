<template>
  <nav class="at-header px-10 pb-2 my-3 flex border-b-2 border-gray-200">
    <h1 class="flex-none font-mono text-xl my-2">
      Auto Trader
    </h1>
    <ul class="flex-grow flex ml-12">
      <li
        class="h-12 py-2 px-6 rounded-lg border-2 hover:border-gray-400 mr-3"
        :class="appLinkClass('/')"
      >
        <router-link to="/">
          Trader App
        </router-link>
      </li>
      <li 
        class="h-12 py-2 px-6 rounded-lg border-2 hover:border-gray-400"
        :class="appLinkClass('/spec')"
      >
        <router-link to="spec">
          Spec App
        </router-link>
      </li>
    </ul>
    <div
      v-if="!!user"
      class="relative flex-none h-13"
      @click="toggleDropdown"
    >
      <img
        src="@/assets/yoyo_profile.jpg"
        class="h-11 rounded-lg cursor-pointer"
      >
      <div
        v-if="displayUserDropdown"
        class="user-dropdown absolute top-12 right-0 w-40 z-30"
      >
        <span class="block px-1 mx-2 py-2 border-b-2 border-gray-200">Hi, Yoyo</span>
        <ul class="">
          <li
            class="hover:text-white hover:bg-blue-400 px-3 py-1 cursor-pointer"
            @click="logout"
          >
            Logout
          </li>
          <li class="hover:text-white hover:bg-blue-400 px-3 py-1 cursor-not-allowed">
            Settings
          </li>
        </ul>
      </div>
    </div>
  </nav>  
</template>

<script>
import { mapState } from 'vuex';
import { store } from '../../store';

export default {
  name: 'ATHeader',
  data() {
    return {
      displayUserDropdown: false,
    }
  },
  computed: {
    ...mapState({
      user: state => state.auth.profile,
    })
  },
  methods: {
    appLinkClass(appPath) {
      return appPath === this.$route.path ? 'border-gray-400' : 'border-white';
    },
    toggleDropdown() {
      this.displayUserDropdown = !this.displayUserDropdown;
    },
    logout() {
      store.dispatch('logout');
    }
  },
}
</script>

<style scoped>
.user-dropdown {
  list-style: none;
  background-color: white;
  background-clip: padding-box;
  border-radius: 6px;
  box-shadow: 0 16px 32px rgba(1,4,9,0.3);
}
</style>