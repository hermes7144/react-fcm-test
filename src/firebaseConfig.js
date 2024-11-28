import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getMessaging, } from 'firebase/messaging';


const firebaseConfig = {
  apiKey: "AIzaSyDPftEo_osnfxBTeSVrAzrcy1uJOu93Fgg",
  authDomain: "fcm-test-36903.firebaseapp.com",
  projectId: "fcm-test-36903",
  storageBucket: "fcm-test-36903.firebasestorage.app",
  messagingSenderId: "522550548187",
  appId: "1:522550548187:web:0910204b7842ea18a01efe"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firebase Auth 및 Messaging 인스턴스 가져오기
const auth = getAuth(app);
const messaging = getMessaging(app);

export { auth, messaging, GoogleAuthProvider };

