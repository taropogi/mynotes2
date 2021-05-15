require('./bootstrap');

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';


import App from './App.vue';

//pages 
import Home from './components/Home.vue';
import About from './components/About.vue';

import TheHeader from './components/TheHeader.vue';
import TheNavBar from './components/TheNavBar.vue';


const router = createRouter({
    history: createWebHistory(),
    routes:[
       {
           path:'/',
           component: Home 
       },
       {
           path: '/about',
           component: About
       }
    ]
});


const app = createApp(App);
app.use(router);
app.component('the-header',TheHeader);
app.component('the-nav',TheNavBar);
app.mount('#app');


 