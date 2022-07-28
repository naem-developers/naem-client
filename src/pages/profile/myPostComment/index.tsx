import Text from '@/components/atoms/Text';
import Header from '@/components/organisms/Header';
import { H_PADDING } from '@/constants';
import { THEME } from '@/theme';
import { TabRouter } from '@react-navigation/routers';
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, useWindowDimensions, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  NavigationState,
  SceneMap,
  SceneRendererProps,
  TabBar,
  TabBarProps,
  TabView,
} from 'react-native-tab-view';
import { FlashList } from '@shopify/flash-list';

const MY_POST_LIST = [
  {
    id: 1,
    type: 'post',
    board: '자유게시판',
    title: '안녕하세요, 남양주시에 살고 있습니다',
    body: '안녕하세요. 남양주시에 살고 있습니다. 혹시 체육관어쩌구저쩌구관어쩌구저쩌구관어쩌구저쩌구',
    createdAt: new Date(),
  },
  {
    id: 2,
    type: 'post',
    board: '자유게시판',
    title: '안녕하세요, 남양주시에 살고 있습니다',
    body: '안녕하세요. 남양주시에 살고 있습니다. 혹시 체육관어쩌구저쩌구관어쩌구저쩌구관어쩌구저쩌구',
    createdAt: new Date(),
  },
  {
    id: 3,
    type: 'post',
    board: '자유게시판',
    title: '안녕하세요, 남양주시에 살고 있습니다',
    body: '안녕하세요. 남양주시에 살고 있습니다. 혹시 체육관어쩌구저쩌구관어쩌구저쩌구관어쩌구저쩌구',
    createdAt: new Date(),
  },
];

const MY_COMMENT_LIST = [
  {
    id: 1,
    type: 'comment',
    board: '자유게시판',
    title: '안녕하세요, 남양주시에 살고 있습니다',
    body: '안녕하세요. 남양주시에 살고 있습니다. 혹시 체육관어쩌구저쩌구관어쩌구저쩌구관어쩌구저쩌구',
    createdAt: new Date(),
  },
  {
    id: 2,
    type: 'comment',
    board: '자유게시판',
    title: '안녕하세요, 남양주시에 살고 있습니다',
    body: '안녕하세요. 남양주시에 살고 있습니다. 혹시 체육관어쩌구저쩌구관어쩌구저쩌구관어쩌구저쩌구',
    createdAt: new Date(),
  },
  {
    id: 3,
    type: 'comment',
    board: '자유게시판',
    title: '안녕하세요, 남양주시에 살고 있습니다',
    body: '안녕하세요. 남양주시에 살고 있습니다. 혹시 체육관어쩌구저쩌구관어쩌구저쩌구관어쩌구저쩌구',
    createdAt: new Date(),
  },
];
interface MyPostCommentPageProps {}

const MyPostCommentPage = (props: MyPostCommentPageProps) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'myPost', title: '내 게시글' },
    { key: 'myComment', title: '내 댓글' },
  ]);

  const MyPost = () => {
    return (
      <View style={styles.flashListContainer}>
        <FlatList
          data={MY_POST_LIST}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  const MyComment = () => {
    return (
      <View style={styles.flashListContainer}>
        <FlatList
          data={MY_COMMENT_LIST}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
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
  flashListContainer: {
    paddingHorizontal: H_PADDING,
  },
});
