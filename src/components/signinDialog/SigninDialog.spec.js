import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import SigninDialog from './SigninDialog.vue'

describe('Signin Dialog component', () => {
  it('should render Signin Dialog component', () => {
    const localVue = createLocalVue();
    localVue.component('font-awesome-icon', FontAwesomeIcon);

    const wrapper = shallowMount(SigninDialog, {
      localVue,
    })
    expect(wrapper).toBeTruthy();
  });
})
