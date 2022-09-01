// index.js
import messaging, { firebase } from '@react-native-firebase/messaging';

// Register background handler
export default async () => {
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {});
};
