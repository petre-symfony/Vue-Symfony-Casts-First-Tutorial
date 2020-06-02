import Vue from 'vue';

new Vue({
  el: '#app',
  render(h) {
    return Vue.compile(template).render.call(this, h);
  },
});
