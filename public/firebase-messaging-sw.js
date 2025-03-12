// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAGn5FGNu5vV8yTc_sMgp61wK86gtQXRTc",
  authDomain: "smarts-next-pwa.firebaseapp.co",
  projectId: "smarts-next-pwa",
  storageBucket: "smarts-next-pwa.firebasestorage.app",
  messagingSenderId: "545017091933",
  appId: "1:545017091933:web:6ec64e6cf90f7853e7bab4",
  measurementId: "G-NNJ214WV5M",
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./logo.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
