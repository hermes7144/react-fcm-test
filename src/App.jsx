// App.js
import React from 'react';
import useFCM from './useFCM';

const App = () => {
  const fcmToken = useFCM();

  return (
    <div>
      <h1>Firebase Cloud Messaging Test</h1>
      {fcmToken ? (
        <p>FCM Token: {fcmToken}</p>
      ) : (
        <p>FCM Token not available</p>
      )}
    </div>
  );
};

export default App;
