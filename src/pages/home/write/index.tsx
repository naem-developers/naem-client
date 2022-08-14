import TextInput from '@/components/atoms/TextInput';
import Header from '@/components/organisms/Header';
import { STANDARD_DEVICE_HEIGHT } from '@/constants';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Camera from '@assets/icons/icn_camera.svg';
import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import Button from '@/components/atoms/Button';

const WriteNewPost = () => {
  return (
    <SafeAreaView>
      <Header title="자유게시판" />
      <ScrollView>
        <View style={styles.container}>
          <TextInput placeholder="게시글 제목" />
          <TextInput
            placeholder="내용을 입력하세요"
            style={styles.body}
            containerStyle={styles.containerStyle}
            multiline={true}
            Icon={() => <Camera />}
          />
          <Text sizeStyle="f13" weightStyle="light" style={styles.text}>
            {
              '위법의 여지가 있거나 타인을 비방하는 부적절한 게시글은\n사전 고지 없이 삭제 조치될 수 있습니다.'
            }
          </Text>
        </View>
        <View style={styles.keywordView}>
          <Text sizeStyle="f19" weightStyle="semi-bold">
            키워드
          </Text>
          <Text sizeStyle="f13" weightStyle="medium" style={styles.subKeywordTitle}>
            최대 3개의 키워드를 선택할 수 있습니다.
          </Text>
          <Button text="등록하기" priority="primary" style={styles.button} onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WriteNewPost;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  containerStyle: {
    marginVertical: 10,
  },
  body: {
    height: (STANDARD_DEVICE_HEIGHT / 5) * 2,
  },
  text: {
    color: THEME.REG_TEXT,
    marginBottom: 20,
  },
  keywordView: {
    borderTopWidth: 10,
    paddingHorizontal: 16,
    paddingTop: 20,
    borderTopColor: THEME.LIGHT_BOX,
  },
  subKeywordTitle: {
    color: THEME.REG_TEXT,
  },
  button: { marginVertical: 10 },
});
