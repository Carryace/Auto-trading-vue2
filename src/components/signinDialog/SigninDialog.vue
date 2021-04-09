<template>
  <div class="fixed inset-0 bg-gray-400 bg-opacity-50">
    <div class="sign-in-container absolute top-1/4 left-1/3 w-1/3 h-1/2 bg-white rounded-lg">
      <h1 class="text-2xl text-center font-bold my-8 py-5">
        Sign In
      </h1>
      <form @submit.prevent="onSubmit">
        <div class="my-3 mx-5">
          <div class="relative h-12 w-2/3 mx-auto text-sm">
            <input
              v-model="username"
              :class="activeField !== 'username' ? 'bg-gray-200' : 'border-2 border-black'"
              class="usr-input h-12 w-full rounded-lg block px-4 pt-3"
              type="text"
              required
              :placeholder="userNamePlaceHolder"
              @focus="setFocus('username')"
            >
            <span
              v-if="activeField === 'username' || validUserName"
              class="font-bold text-xs text-gray-400 absolute top-1 left-3 pl-1"
            >USERNAME</span>
          </div>
        </div>
        <div class="my-2 mx-5">
          <div class="relative h-12 w-2/3 mx-auto text-sm">
            <input
              v-model="password"
              :class="activeField !== 'password' ? 'bg-gray-200' : 'border-2 border-black'"
              class="pwd-input h-12 w-full rounded-lg block px-4 pt-3"
              type="password"
              required
              :placeholder="pwdPlaceHolder"
              @focus="setFocus('password')"
            >
            <span
              v-if="activeField === 'password' || validPwd"
              class="font-bold text-xs text-gray-400 absolute top-1 left-3 pl-1"
            >PASSWORD</span>
          </div>
        </div>
        <div class="my-4 mx-5">
          <div class="w-2/3 mx-auto pl-1">
            <input
              checked
              class="stay-signin-chbx transform scale-125"
              type="checkbox"
              name="staySignedIn"
            >
            <span
              class="stay-signin-label ml-2"
            >Stay signed in</span>
          </div>
        </div>
        <div class="my-10">
          <button
            class="block w-16 h-16 rounded-lg border-2 mx-auto"
            :class="validUserName && validPwd ? 'border-red-500' : 'disabled border-gray-300' "
          >
            <font-awesome-icon
              :icon="['fas', 'arrow-right']" 
              :class="validUserName && validPwd ? 'text-red-500': 'text-gray-300'"
              class="text-xl"
            />
          </button>
          <p class="text-center text-gray-300 mt-5 text-sm">
            CAN'T SIGN IN? <br> PLZ GET AN INVITE
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import { store } from '../../store';

export default {
  name: 'ATSigninDialog',
  data() {
    return {
      activeField: 'username',
      username: '',
      password: '',
    };
  },
  computed: {
    userNamePlaceHolder({ activeField }) {
      return activeField === 'username' ? '' : 'USERNAME';
    },
    pwdPlaceHolder({ activeField }) {
      return activeField === 'password' ? '' : 'PASSWORD';
    },
    validUserName({ username }) {
      return username.trim().length > 0;
    },
    validPwd({ password }) {
      return password.trim().length > 0;
    }
  },
  methods: {
    setFocus(fieldName) {
      this.activeField = fieldName;
    },
    onSubmit(event) {
      event.stopPropagation();
      if (this.validUserName && this.validPwd) {
        store.dispatch('login', {
          username: this.username,
          password: this.password,
        })
      }
    }
  },
}
</script>

<style scoped>
.sign-in-container {
  min-height: 500px;
  max-width: 450px;
}
.usr-input:focus, .pwd-input:focus {
  border-color: 2px solid black !important;
  outline-offset: 0px !important;
  outline: none !important;
}
</style>