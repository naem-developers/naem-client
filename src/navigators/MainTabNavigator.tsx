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
import IcnHome from '@/assets/icons/icn_home.svg';
import IcnBoard from '@/assets/icons/icn_board.svg';
import IcnWelfarePlace from '@/assets/icons/icn_welfare_place.svg';
import IcnMyPage from '@/assets/icons/icn_my_page.svg';

export type MainTabParamList = {
  Home: undefined;
  Board: undefined;
  WelfarePlace: undefined;
  MyPage: undefined;
};

const Tab = createBottomTabNavigator();

const TabContainer = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const tabBarIcon = options?.tabBarIcon;

        const focused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!focused && !event.defaultPrevented) {
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
            accessibilityState={focused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabContainer, { paddingBottom: insets.bottom }]}
          >
            <>{tabBarIcon}</>
            <Text style={{ ...styles.text, ...{ color: focused ? THEME.MAIN : '#767676' } }}>
              {label as string}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabBarIcon = ({ focused, label, TabIcon }: any) => {
  return (
    <View
      accessibilityRole="button"
      accessibilityState={focused ? { selected: true } : {}}
      // accessibilityLabel={options.tabBarAccessibilityLabel}
      // testID={options.tabBarTestID}
      // onPress={onPress}
      // onLongPress={onLongPress}
      style={styles.tabContainer}
    >
      {TabIcon}
      <Text style={{ ...styles.text, ...{ color: focused ? THEME.MAIN : '#767676' } }}>
        {label as string}
      </Text>
    </View>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      defaultScreenOptions={{ tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              label="홈"
              TabIcon={<IcnHome width={24} height={24} fill={focused ? THEME.MAIN : '#767676'} />}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Board"
        component={BoardPage}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              label="게시판"
              TabIcon={<IcnBoard width={24} height={24} fill={focused ? THEME.MAIN : '#767676'} />}
            />
          ),
        }}
      />
      <Tab.Screen name="Write" component={HomePage} />
      <Tab.Screen
        name="WelfarePlace"
        component={WelfarePlacePage}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              label="복지 공간"
              TabIcon={
                <IcnWelfarePlace width={24} height={24} fill={focused ? THEME.MAIN : '#767676'} />
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              label="마이페이지"
              TabIcon={<IcnMyPage width={24} height={24} fill={focused ? THEME.MAIN : '#767676'} />}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    backgroundColor: 'red',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: 11,
  },
});

export default MainTabNavigator;
