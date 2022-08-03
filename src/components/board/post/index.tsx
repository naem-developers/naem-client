import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const PostView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title} sizeStyle="f13" weightStyle="light">
          등록 게시글
        </Text>
        <Text style={styles.subTitle} sizeStyle="f12" weightStyle="light">
          {`건`}
        </Text>
      </View>
    </View>
  );
};

export default PostView;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: THEME.STRONG_TEXT,
  },
  subTitle: {
    color: THEME.REG_TEXT,
    marginLeft: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
