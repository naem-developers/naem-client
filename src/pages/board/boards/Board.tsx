import BoardSearchBar from '@/components/board/boardSearchBar';
import PostView from '@/components/board/post';
import useGetPosts from '@/hooks/api/board/useGetPosts';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { BoardType, PROTECTOR } from '@/types/board';
import { postedData } from '@/types';

const HotBoard = ({ boardType }: { boardType: BoardType }) => {
  const [selectedKeywords, setSelectedKeywords] = useState<Array<string>>([]);
  const [searchValue, setSearchValue] = useState<string>();
  // await API.getpostsData(params);
  return (
    <View style={styles.container}>
      <BoardSearchBar
        selectedKeywords={selectedKeywords}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSelectedKeywords={setSelectedKeywords}
      />
      <PostView boardType={boardType} selectedKeywords={selectedKeywords} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
});

export default HotBoard;
