import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextInput from '@/components/atoms/TextInput';
import { THEME } from '@/theme';
import { WINDOW_WIDTH } from '@/constants';

interface CommentsProps {}

const CommentInput = ({}: CommentsProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        buttonText={'등록'}
        placeholder={'댓글 입력'}
        inputContatinerStyle={styles.input}
        style={styles.textInput}
        buttonTextStyle={styles.buttonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.BG,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    bottom: 0,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  input: {
    flexDirection: 'row',
  },
  textInput: {
    width: WINDOW_WIDTH - 90,
  },
  buttonText: {},
});

export default CommentInput;
