import firebase from 'firebase/app';
import 'firebase/auth';

export const authModule = {
  state: {
    profile: null,
  },
  mutations: {
    profileUpdate(state, payload) {
      state.profile = payload;
    }
  },
  actions: {
    login({commit}, {username, password}) {
      firebase.auth().signInWithEmailAndPassword(username, password)
      .then(user => {
        commit('profileUpdate', user);
      })
      .catch(error => {
        console.error(error);
      });
    },
    logout({commit}){
      firebase.auth().signOut()
      .then(() => {
        commit('profileUpdate', null);
      })
      .catch(err => {
        console.error(err);
      });
    },
  }
}