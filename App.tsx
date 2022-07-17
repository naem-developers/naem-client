/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './src/navigators/RootStackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EncryptedStorage from 'react-native-encrypted-storage';
import utils from '@/utils';
import I18n from '@/i18n';
function App() {

  useEffect(()=>{
    setLanguage();
  },[]);

  const setLanguage = async() => {
    const language = await EncryptedStorage.getItem('language state');
    I18n.locale = language? language : utils.SYSTEMLANGUAGE;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
