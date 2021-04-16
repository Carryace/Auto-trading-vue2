import { shallowMount, createLocalVue } from '@vue/test-utils';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vuex from 'vuex'
import SpecSideDrawer from './SpecSideDrawer.vue'

describe('SpecSideDrawer component', () => {
  it('should render SpecSideDrawer component', () => {
    const localVue = createLocalVue();
    localVue.component('font-awesome-icon', FontAwesomeIcon);
    localVue.use(Vuex);

    const wrapper = shallowMount(SpecSideDrawer, {
      computed: {
        watcherList: () => { return []; }
      },
      localVue,
    })
    expect(wrapper).toBeTruthy();
  })
})
