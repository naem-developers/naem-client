import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../pages/home';
import BoardPage from '../pages/board';
import WelfarePlacePage from '../pages/welfarePlace';
import MyPage from '../pages/profile';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Board" component={BoardPage} />
      <Tab.Screen name="WelfarePlace" component={WelfarePlacePage} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
