<template>
  <div id="app">
    <h1>FCM Test</h1>
    Registered FCM Token: {{ currentToken }}
    <div class="">Notifications:</div>
    <div v-if="notifications.length === 0">
      Waiting for notification ... 🙄🙄🙄🙄🙄🥱
    </div>
    <div v-else v-for="noti of notifications" :key="noti">
      {{ noti }}
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/messaging";

export default {
  data: () => ({
    notifications: [],
    currentToken: null
  }),
  async created() {
    const messaging = firebase.messaging();
    try {
      const currentToken = await messaging.getToken({
        vapidKey:
          "BA_JblweESwTAIVf4H9-10z4jz_Q_ZciLFUq40Yi73jXM8bZ7QQ7l2HwnKzwo_LDkKdIetqJ8OgzZdc3LIMTZ-o"
      });
      if (currentToken) {
        console.log("[MESSAGE] currentToken", currentToken);
        this.currentToken = currentToken;
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
        // ...
      }
    } catch (error) {
      console.log("An error occurred while retrieving token. ", error);
    }

    messaging.onMessage(payload => {
      console.log("Message received. ", payload);
      this.notifications.push(payload);
    });
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
