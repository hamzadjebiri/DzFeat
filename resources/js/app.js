require('./bootstrap');

window.Vue = require('vue');

/**  vuetify */

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 

Vue.use(Vuetify) ;

/**  VueResource */

import VueResource from 'vue-resource';

Vue.use(VueResource);

/**  VeeValidate */

Vue.use(VeeValidate);
  
import VeeValidate from 'vee-validate';



Vue.component('layout-catalogue', require('./components/catalogue/layout.vue').default);

Vue.component('liste-catalogue', require('./components/catalogue/liste.vue').default);

Vue.component('navbar-catalogue', require('./components/catalogue/navbar-catalogue.vue').default);

Vue.component('options-catalogue', require('./components/catalogue/options.vue').default);

Vue.component('catalogue', require('./components/catalogue/catalogue.vue').default);


const app = new Vue({
    el: '#app',
});
