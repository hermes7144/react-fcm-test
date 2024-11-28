importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');


const firebaseConfig = {
  apiKey: "AIzaSyDPftEo_osnfxBTeSVrAzrcy1uJOu93Fgg",
  authDomain: "fcm-test-36903.firebaseapp.com",
  projectId: "fcm-test-36903",
  storageBucket: "fcm-test-36903.firebasestorage.app",
  messagingSenderId: "522550548187",
  appId: "1:522550548187:web:0910204b7842ea18a01efe"
};

firebase.initializeApp(firebaseConfig);

self.addEventListener("install", function (e) {
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  console.log("fcm service worker가 실행되었습니다.");
});

const messaging = firebase.messaging();

// 백그라운드 메시지 처리
messaging.onBackgroundMessage((payload) => {
  console.log('Background Message received:', payload);
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/icons/icon-192x192.png',
  });
});