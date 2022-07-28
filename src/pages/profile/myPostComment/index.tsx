import Text from '@/components/atoms/Text';
import Header from '@/components/organisms/Header';
import { H_PADDING } from '@/constants';
import { THEME } from '@/theme';
import { TabRouter } from '@react-navigation/routers';
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  NavigationState,
  SceneMap,
  SceneRendererProps,
  TabBar,
  TabBarProps,
  TabView,
} from 'react-native-tab-view';

interface MyPostCommentPageProps {}

const MyPostCommentPage = (props: MyPostCommentPageProps) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'myPost', title: '내 게시글' },
    { key: 'myComment', title: '내 댓글' },
  ]);

  const MyPost = () => {
    return <Text>MyPost</Text>;
  };

  const MyComment = () => {
    return <Text>MyComment</Text>;
  };

  const renderScene = SceneMap({
    myPost: MyPost,
    myComment: MyComment,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: THEME.MAIN }}
      style={{ backgroundColor: THEME.BG }}
      renderLabel={({ route, focused, color }) => (
        <Text
          sizeStyle="f16"
          weightStyle={focused ? 'bold' : 'medium'}
          style={focused ? styles.strongTextColor : styles.regTextColor}
        >
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="내 게시글 / 댓글" />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
};

export default MyPostCommentPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BG,
  },
  contentContainerStyle: {
    padding: H_PADDING,
  },
  strongTextColor: {
    color: THEME.STRONG_TEXT,
  },
  regTextColor: {
    color: THEME.REG_TEXT,
  },
});
