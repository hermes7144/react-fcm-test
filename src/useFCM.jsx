// useFCM.js
import { useEffect, useState } from 'react';
import { getToken, onMessage } from 'firebase/messaging';
import { messaging } from './firebaseConfig';

const useFCM = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // FCM 토큰 요청
    const requestFCMToken = async () => {
      try {
        const currentToken = await getToken(messaging, {
          vapidKey: 'BIS6Ck66K_-8gebnSG7JLHbSjI26uNrJMUelSGgdUQhWmqQsO4mLQUnBTf7DZVqDUxQtMMGOEaDR0OYAFBn5q90',
        });
        if (currentToken) {
          setToken(currentToken);
          console.log('FCM Token:', currentToken);
          // 서버로 토큰을 보낼 수 있음
        } else {
          console.log('No FCM token available');
        }
      } catch (error) {
        console.error('Error getting FCM token:', error);
      }
    };

    // FCM 토큰 요청
    requestFCMToken();

    // 포그라운드에서 푸시 메시지를 받을 때
    onMessage(messaging, (payload) => {
      console.log('Message received:', payload);
      new Notification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.icon,
      });    });
  }, []);

  return token;
};

export default useFCM;
