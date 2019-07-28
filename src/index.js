import sendReplay from './components/sendReplay.vue'

/* istanbul ignore next */
sendReplay.install = function(Vue) {
  Vue.component(sendReplay.name, sendReplay);
};

export default sendReplay;