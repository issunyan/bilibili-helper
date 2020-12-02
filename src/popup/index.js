import Vue from 'vue';
import AppComponent from './App/App.vue';
import { Card } from 'element-ui';

Vue.use(Card);
Vue.component('app-component', AppComponent);

new Vue({
  el: '#app',
  render: (createElement) => {
    return createElement(AppComponent);
  },
});
