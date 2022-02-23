import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCookies from "vue3-cookies";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBgvnosCycsNIBPUtkRthltbtAYo2DKi60",
    authDomain: "anime-search-7accc.firebaseapp.com",
    projectId: "anime-search-7accc",
    storageBucket: "anime-search-7accc.appspot.com",
    messagingSenderId: "1016413402117",
    appId: "1:1016413402117:web:f6e28ba536bca82648986c",
    measurementId: "G-WBR9FR6HSP"
};

const app = initializeApp(firebaseConfig)

createApp(App).use(store).use(router).use(VueCookies).use(app).mount("#app");
