require('./bootstrap');

import { createApp } from 'vue';
import App from './App.vue';
import TheHeader from './components/TheHeader.vue';
import TheNavBar from './components/TheNavBar.vue';


const app = createApp(App);
app.component('the-header',TheHeader);
app.component('the-nav',TheNavBar);
app.mount('#app');


const home = createApp(App); 
app.mount('#home');