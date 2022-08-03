import BoardSearchBar from '@/components/board/boardSearchBar';
import PostView from '@/components/board/post';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HotBoard = () => {
  const [selectedKeyword, setSelectedKeyword] = useState<string>();
  return (
    <View style={styles.container}>
      <BoardSearchBar selectedKeyword={selectedKeyword} setSelectedKeyword={setSelectedKeyword} />
      <PostView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
});

export default HotBoard;
