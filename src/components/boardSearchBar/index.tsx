import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../atoms/Text';
import Tag from '../molecules/Tag';

const BoardSearchBar = () => {
  return (
    <View style={styles.container}>
      <Text>키워드 선택</Text>
      <Text>장애 유형별 키워드를 선택해 더 빠르게 글을 검색하세요</Text>
      <Tag text={'#테스트'} />
    </View>
  );
};

export default BoardSearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
});
