/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Suspense, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './src/navigators/RootStackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import requestNotificationPermission from '@/utils/permissions/requestNotificationPermission';
import useForegroundNotification from '@/hooks/notification/useForegroundNotification';
import setBackgroundNotification from '@/utils/notifications/setBackgroundNotification';
import Toast from 'react-native-toast-message';
import EncryptedStorage from 'react-native-encrypted-storage';
import { USER_STORAGE_KEY } from '@/constants/storageKeys';
import { applyToken } from '@/utils/auth';
import { RecoilRoot } from 'recoil';
import SplashScreen from 'react-native-splash-screen';
import LoadingTemplate from '@/components/templates/LoadingTemplate';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    const handleToken = async () => {
      const auth = await EncryptedStorage.getItem(USER_STORAGE_KEY);
      if (!auth) return;
      const authDataInJsonFormat = JSON.parse(auth);
      applyToken(authDataInJsonFormat.accessToken);
    };
    handleToken();

    MaterialCommunityIcons.loadFont();

    SplashScreen.hide();
  }, []);

  requestNotificationPermission();
  setBackgroundNotification();

  useForegroundNotification();

  return (
    <Suspense fallback={<LoadingTemplate />}>
      <SafeAreaProvider>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <PaperProvider>
              <NavigationContainer>
                <RootStackNavigator />
              </NavigationContainer>
            </PaperProvider>
          </QueryClientProvider>
        </RecoilRoot>
      </SafeAreaProvider>
      <Toast />
    </Suspense>
  );
}

export default App;
