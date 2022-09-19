import Text from '@/components/atoms/Text';
import Header from '@/components/organisms/Header';
import { H_PADDING } from '@/constants';
import { THEME } from '@/theme';
import React, { useState } from 'react';
import { StyleSheet, useWindowDimensions, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import IconListItem, { IconListItemProps } from '@/components/organisms/IconListItem';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigators/RootStackNavigator';
import { DumyPostData } from '@/pages/board/boards/dumys';
import { ParamListBase, useNavigation } from '@react-navigation/native';

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
interface MyPostCommentPageProps
  extends NativeStackScreenProps<RootStackParamList, 'MyPostCommentPage'> {}

const MyPostCommentPage = ({ route }: MyPostCommentPageProps) => {
  const type = route.params.type ?? 'post';
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [index, setIndex] = useState(type === 'post' ? 0 : 1);
  const [routes] = useState([
    { key: 'myPost', title: '내 게시글' },
    { key: 'myComment', title: '내 댓글' },
  ]);

  const MyPost = () => {
    return (
      <FlatList
        data={DumyPostData}
        renderItem={({ item }) => (
          <IconListItem
            type={'post'}
            board={item.type}
            title={item.title}
            body={item.body}
            createdAt={item.createdAt}
            onPress={() => navigation.navigate('BoardDetail', { id: item.id })}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
      />
    );
  };

  const MyComment = () => {
    return (
      <FlatList
        data={MY_COMMENT_LIST}
        renderItem={({ item }) => (
          <IconListItem
            type={item.type as IconListItemProps['type']}
            board={item.board}
            title={item.title}
            body={item.body}
            createdAt={item.createdAt}
            onPress={() => navigation.navigate('BoardDetail', { id: item.id })}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
      />
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
