import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCookies from "vue3-cookies";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    // storageBucket: accc.appspot.com",
    // messagingSenderId: ,
    // appId: ":web:f6e28ba536bca82648986c",
    // measurementId: 
};

const app = initializeApp(firebaseConfig)

createApp(App).use(store).use(router).use(VueCookies).use(app).mount("#app");
