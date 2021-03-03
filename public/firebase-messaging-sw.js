// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyBey7-yNYXBtHcpP6M--yprW-mgK7WHhZ8",
  authDomain: "vimc-c2136.firebaseapp.com",
  databaseURL: "https://vimc-c2136.firebaseio.com",
  projectId: "vimc-c2136",
  storageBucket: "vimc-c2136.appspot.com",
  messagingSenderId: "902294736141",
  appId: "1:902294736141:web:955b321449d11ed32b3444"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
