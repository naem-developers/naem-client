import TextInput from '@/components/atoms/TextInput';
import Header from '@/components/organisms/Header';
import { DISABLED_TYPE, STANDARD_DEVICE_HEIGHT } from '@/constants';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Camera from '@assets/icons/icn_camera.svg';
import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import Button from '@/components/atoms/Button';
import Tag from '@/components/molecules/Tag';
import { removeItemOfArray } from '@/utils/array';

const WriteNewPost = () => {
  const keywords = DISABLED_TYPE;
  const [selectedKeywords, setSelectedKeywords] = React.useState<Array<string>>([]);
  const setSearchKeyword = React.useCallback(
    (item: string) => {
      if (selectedKeywords?.includes(item))
        setSelectedKeywords(removeItemOfArray(selectedKeywords, item));
      else if (selectedKeywords.length >= 3) return;
      else setSelectedKeywords([...selectedKeywords, item]);
    },
    [selectedKeywords],
  );

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
          <Text sizeStyle="f19" weightStyle="semiBold">
            키워드
          </Text>
          <Text sizeStyle="f13" weightStyle="medium" style={styles.subKeywordTitle}>
            최대 3개의 키워드를 선택할 수 있습니다.
          </Text>
          <View style={styles.tags}>
            {keywords.map((item) => {
              return (
                <Tag
                  key={item.toString()}
                  text={`#${item}`}
                  style={styles.tag}
                  selected={selectedKeywords?.includes(item)}
                  onPress={() => setSearchKeyword(item)}
                />
              );
            })}
          </View>
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
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    marginRight: 12,
    marginVertical: 8,
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
