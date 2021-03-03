import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBey7-yNYXBtHcpP6M--yprW-mgK7WHhZ8",
  authDomain: "vimc-c2136.firebaseapp.com",
  databaseURL: "https://vimc-c2136.firebaseio.com",
  projectId: "vimc-c2136",
  storageBucket: "vimc-c2136.appspot.com",
  messagingSenderId: "902294736141",
  appId: "1:902294736141:web:955b321449d11ed32b3444"
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
