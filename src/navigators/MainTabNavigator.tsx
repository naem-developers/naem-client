import React from 'react';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BoardPage from '@pages/board';
import WelfarePlacePage from '@pages/welfarePlace';
import MyPage from '@pages/profile';
import HomePage from '@pages/home';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '@/components/atoms/Text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { THEME } from '@/theme';

export type MainTabParamList = {
  Home: undefined;
  Board: undefined;
  WelfarePlace: undefined;
  MyPage: undefined;
};

const Tab = createBottomTabNavigator();

const TabContainer = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            // navigation.navigate({ name: route.name, merge: true });
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: insets.bottom,
            }}
          >
            <Text style={[styles.text, { color: isFocused ? THEME.MAIN : '#767676' }]}>
              {label as string}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabContainer {...props} />}
    >
      <Tab.Screen name="Home" component={HomePage} options={{ tabBarLabel: '홈' }} />
      <Tab.Screen name="Board" component={BoardPage} options={{ tabBarLabel: '게시판' }} />
      <Tab.Screen
        name="WelfarePlace"
        component={WelfarePlacePage}
        options={{ tabBarLabel: '복지 공간' }}
      />
      <Tab.Screen name="MyPage" component={MyPage} options={{ tabBarLabel: '마이페이지' }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
  },
});

export default MainTabNavigator;
