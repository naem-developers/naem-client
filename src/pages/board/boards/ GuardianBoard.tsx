import BoardSearchBar from '@/components/board/boardSearchBar';
import PostView from '@/components/board/post';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { DumyPostData } from './dumys';

const GuardianBoard = () => {
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
      <PostView postDataArray={DumyPostData} selectedKeywords={selectedKeywords} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
});

export default GuardianBoard;
