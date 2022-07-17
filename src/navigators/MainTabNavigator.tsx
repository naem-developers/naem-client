import React from 'react';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BoardPage from '@pages/board';
import WelfarePlacePage from '@pages/welfarePlace';
import MyPage from '@pages/profile';
import HomePage from '@pages/home';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '@/components/atoms/Text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { THEME } from '@/theme';
import IcnHome from '@/assets/icons/icn_home.svg';
import IcnBoard from '@/assets/icons/icn_board.svg';
import IcnWelfarePlace from '@/assets/icons/icn_welfare_place.svg';
import IcnMyPage from '@/assets/icons/icn_my_page.svg';
import IcnPlusWithCircle from '@/assets/icons/icn_plus_with_circle.svg';
import { useNavigation } from '@react-navigation/core';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackNavigator';

export type MainTabParamList = {
  Home: undefined;
  Board: undefined;
  WelfarePlace: undefined;
  MyPage: undefined;
};

interface MainTabNavigatorProps
  extends NativeStackScreenProps<RootStackParamList, 'MainTabNavigator'> {}

interface TabBarIconProps {
  focused?: boolean;
  label?: string;
  TabIcon?: React.ReactNode;
  onPress?: () => void;
}

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ focused, label, TabIcon, onPress }: TabBarIconProps) => {
  const Container = Boolean(onPress) ? Pressable : View;

  return (
    <Container
      accessibilityRole="button"
      accessibilityState={focused ? { selected: true } : {}}
      // accessibilityLabel={options.tabBarAccessibilityLabel}
      // testID={options.tabBarTestID}
      // onLongPress={onLongPress}
      onPress={onPress}
      style={styles.tabContainer}
    >
      {TabIcon}
      <Text style={{ ...styles.text, ...{ color: focused ? THEME.MAIN : '#767676' } }}>
        {label as string}
      </Text>
    </Container>
  );
};

const MainTabNavigator = ({ navigation }: MainTabNavigatorProps) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
          height: 100,
          paddingTop: 16,
          paddingBottom: 36,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
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
      <Tab.Screen
        name="Post"
        component={HomePage}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              onPress={() => {
                navigation.navigate('PostPage');
              }}
              TabIcon={<IcnPlusWithCircle width={48} height={48} />}
            />
          ),
        }}
      />
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
