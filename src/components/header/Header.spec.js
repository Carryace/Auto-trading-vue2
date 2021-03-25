import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'
import Header from './Header.vue'

describe('Header component', () => {
  it('should render header component', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();
    const wrapper = shallowMount(Header, {
      localVue,
      router,
    })
    expect(wrapper).toBeTruthy();
  })
})
