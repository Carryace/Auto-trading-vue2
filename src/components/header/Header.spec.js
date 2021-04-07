import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Header from './Header.vue'

describe('Header component', () => {
  it('should render header component', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);

    const router = new VueRouter();
    const wrapper = shallowMount(Header, {
      computed: {
        user: () => { return {displayName: 'testing'}; }
      },
      localVue,
      router,
    })
    expect(wrapper).toBeTruthy();
  })
})
