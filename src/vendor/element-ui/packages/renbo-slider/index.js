import RenboSlider from './src/component';

/* istanbul ignore next */
RenboSlider.install = function(Vue) {
  Vue.component(RenboSlider.name, RenboSlider);
};

export default RenboSlider;
