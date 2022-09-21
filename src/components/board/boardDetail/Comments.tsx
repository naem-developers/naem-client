import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Comments } from '@/types';
import CommentItem from './CommentItem';
import Text from '@/components/atoms/Text';

interface CommentsProps {
  commentsData: Array<Comments>;
}

const CommentsView = ({ commentsData }: CommentsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text weightStyle="semiBold" sizeStyle="f19">
          댓글
        </Text>
        <Text weightStyle="semiBold" sizeStyle="f19" colorStyle="regText" style={styles.sub}>
          {commentsData.length}
        </Text>
      </View>
      <View style={styles.comments}>
        {commentsData.map((item: Comments) => {
          return <CommentItem comment={item} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 24,
    flexDirection: 'row',
  },
  sub: {
    marginLeft: 10,
  },
  comments: {
    marginBottom: 80,
  },
});

export default CommentsView;
