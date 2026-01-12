import { useEffect, useRef } from 'react';
import { PermissionsAndroid, Platform, AppState } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';

const requestUserPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    if (Platform.Version >= 33) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  }
  const authStatus = await messaging().requestPermission();
  return authStatus >= 1; // Authorized or Provisional
};

export const useNotification = () => {
  const isRunning = useRef(false);

  useEffect(() => {
    // 1. Create a Channel (Crucial for Android "Heads-up" banners)
    const setupChannel = async () => {
      await notifee.createChannel({
        id: 'important_channel',
        name: 'Important Notifications',
        importance: AndroidImportance.HIGH, // HIGH is what makes it slide down
      });
    };
    setupChannel();

    // 2. Foreground Listener
    const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
      // Use Notifee to display the banner
      await notifee.displayNotification({
        title: remoteMessage.notification?.title,
        body: remoteMessage.notification?.body,
        android: {
          channelId: 'important_channel',
          importance: AndroidImportance.HIGH,
          pressAction: { id: 'default' }, // Opens app on click
        },
      });
    });

    const safeSetup = async () => {
      if (isRunning.current) return;
      isRunning.current = true;
      setTimeout(async () => {
        if (await requestUserPermission()) {
          if (Platform.OS === 'ios')
            await messaging().registerDeviceForRemoteMessages();
          const token = await messaging().getToken();
          console.warn('FCM TOKEN:', token);
        }
      }, 1000);
    };

    safeSetup();
    const sub = AppState.addEventListener(
      'change',
      s => s === 'active' && safeSetup(),
    );

    return () => {
      unsubscribeForeground();
      sub.remove();
    };
  }, []);

  return { getFcmToken: () => messaging().getToken() };
};
