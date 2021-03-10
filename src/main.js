import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDHc89hy8sVBXJrbBnkZ3d9JQK9W5wr9-c",
  authDomain: "my-e-office.firebaseapp.com",
  databaseURL: "https://my-e-office.firebaseio.com",
  projectId: "my-e-office",
  storageBucket: "my-e-office.appspot.com",
  messagingSenderId: "624879123062",
  appId: "1:624879123062:web:2d810a7f61e5bc0607fd57"
};

firebase.initializeApp(firebaseConfig);

navigator.serviceWorker.addEventListener("message", event => {
  console.log("Push Notification Recieved", event); // refresh code goes here
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onMessage(payload => {
  console.log("Message received. ", payload);
  // ...
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
