/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './src/navigators/RootStackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import requestNotificationPermission from '@/utils/permissions/requestNotificationPermission';
import useForegroundNotification from '@/hooks/notification/useForegroundNotification';
import setBackgroundNotification from '@/utils/notifications/setBackgroundNotification';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  requestNotificationPermission();
  setBackgroundNotification();

  useForegroundNotification();

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
