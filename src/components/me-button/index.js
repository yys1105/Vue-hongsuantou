import MeButton from './me-button.vue';

/* istanbul ignore next */
MeButton.install = function(Vue) {
  Vue.component(MeButton.name, MeButton);
};

export default MeButton;
