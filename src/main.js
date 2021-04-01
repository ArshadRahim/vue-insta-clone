import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';


import login from './components/login';
import Home from './components/Home';
import User from './components/user';
// import notFound from './components/notFound';
import Header from './components/header';
import Footer from './components/footer';
import Signup from './components/signup';
import Stories from './components/stories';
import Posts from './components/posts';
import Sidebar from './components/side-bar';
import axios from 'axios'
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDQINmn_67-YEaQmIrvVtAlfW-V5tbcxIE",
  authDomain: "test-instaclone.firebaseapp.com",
  projectId: "test-instaclone",
  storageBucket: "test-instaclone.appspot.com",
  messagingSenderId: "897935568992",
  appId: "1:897935568992:web:16e8fa9055f144adf8d305",
  measurementId: "G-0B2XJWZCBM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();



Vue.use(VueRouter);

Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.component('insta-footer', Footer)
Vue.component('insta-header', Header)
Vue.component('insta-stories', Stories)
Vue.component('insta-posts', Posts)
Vue.component('side-bar', Sidebar)

const router = new VueRouter({
  routes: [
      {path: "/" , component : login },
      {path: "/home" , component : Home },
      {path: "/user/:id" , component : User },
      {path: "/signup", component : Signup },
      // {path: "*" , component : notFound },

  ],
  mode: 'history'
})
new Vue({
  router,  
  vuetify,
  render: h => h(App)
}).$mount('#app')

 