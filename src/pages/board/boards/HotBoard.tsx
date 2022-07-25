import BoardSearchBar from '@/components/board/boardSearchBar';
import PostView from '@/components/board/post';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Text, StyleSheet, View } from 'react-native';

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
    createdAt: new Date(),
  },
];

const HotBoard = () => {
  const [selectedKeywords, setSelectedKeywords] = useState<Array<string>>([]);
  const [searchValue, setSearchValue] = useState<string>();
  return (
    <View style={styles.container}>
      <BoardSearchBar
        selectedKeywords={selectedKeywords}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSelectedKeywords={setSelectedKeywords}
      />
      <PostView postDataArray={DummyPostData} selectedKeywords={selectedKeywords} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
});

export default HotBoard;
