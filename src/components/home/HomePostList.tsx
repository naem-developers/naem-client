import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import Post from '@components/board/post/Post';
import { THEME } from '@/theme';
import Text from '@/components/atoms/Text';

const DummyPostData = [
  {
    id: 1,
    type: 'hot',
    title: '안녕하세요, 남양주시에 살고 있습니다',
    body: '안녕하세요. 남양주시에 살고 있습니다. 혹시 체육관어쩌구저쩌구관어쩌구저쩌구관어쩌구저쩌구',
    userId: 'fsdafs123',
    tags: ['지적장애', '간장애', '기타'],
    like: 10,
    comment: 2,
    boardType: '자유 게시판',
    createdAt: new Date(),
  },
  {
    id: 2,
    type: 'hot',
    title: '안녕하세요, 남양주시에 살고 있습니다',
    body: '안녕하세요. 남양주시에 살고 있습니다. 혹시 체육관어쩌구저쩌구관어쩌구저쩌구관어쩌구저쩌구',
    userId: 'fsdafs123',
    tags: ['지적장애', '간장애', '기타'],
    like: 10,
    comment: 2,
    boardType: '추천 게시판',
    createdAt: new Date(),
  },
  {
    id: 3,
    type: 'hot',
    title: '안녕하세요, 남양주시에 살고 있습니다',
    body: '안녕하세요. 남양주시에 살고 있습니다. 혹시 체육관어쩌구저쩌구관어쩌구저쩌구관어쩌구저쩌구',
    userId: 'fsdafs123',
    tags: ['지적장애', '간장애', '기타'],
    like: 10,
    comment: 2,
    boardType: '자유게시판',
    createdAt: new Date(),
  },
];

const HomePostList = () => {
  const listData = DummyPostData.slice(0, 3);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text sizeStyle="f19" weightStyle="semiBold">
          인기 게시글
        </Text>
        <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText">
          지금 나음에서 인기있는 게시글을 확인하세요
        </Text>
      </View>
      {listData.map((item) => {
        return <Post postedData={item} selectedKeywords={[]} />;
      })}
    </View>
  );
};

export default HomePostList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.BG,
    paddingHorizontal: 16,
  },
  title: {
    marginTop: 20,
    justifyContent: 'center',
  },
});
