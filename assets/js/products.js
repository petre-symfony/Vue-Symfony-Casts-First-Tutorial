import Vue from 'vue';

const template = '<h1>Hello {{ firstName }}! Is this cooler?</h1>';

new Vue({
  el: '#app',
  data() {
    return {
      firstName: 'Petri'
    };
  },
  render(h) {
    return Vue.compile(template).render.call(this, h);
  },
});
