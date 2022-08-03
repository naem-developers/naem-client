import BoardSearchBar from '@/components/board/boardSearchBar';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const GuardianBoard = () => {
  const [selectedKeyword, setSelectedKeyword] = useState<string>();
  return (
    <View style={styles.container}>
      <BoardSearchBar selectedKeyword={selectedKeyword} setSelectedKeyword={setSelectedKeyword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
});

export default GuardianBoard;
