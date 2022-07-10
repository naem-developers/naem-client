import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from '../pages/landing';

const Stack = createNativeStackNavigator();

function RootStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="landing" component={LandingPage} />
    </Stack.Navigator>
  );
}

export default RootStackNavigator;
