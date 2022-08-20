import { ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/organisms/Header';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { THEME } from '@/theme';
import { postDetailData } from '@pages/board/boards/dumys';
import Text from '@/components/atoms/Text';
import Tag from '@/components/molecules/Tag';
import DetailMenuBar from '@/components/board/boardDetail/DetailMenuBar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const BoardDetail = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const postData = postDetailData;

  return (
    <SafeAreaView style={styles.container}>
      <Header title="자유게시판" titleStyle={styles.textAlign} />
      <ScrollView style={styles.scrollView}>
        <Text sizeStyle="f20" weightStyle="semiBold">
          {postData.title}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.footerText} sizeStyle="f13" weightStyle="medium">
            {postData.userId}
          </Text>
          <Text style={styles.footerText} sizeStyle="f13" weightStyle="medium">
            {`  ·  ${postData.createdAt.toString()}`}
          </Text>
        </View>
        <Text style={styles.body} sizeStyle="f17" weightStyle="medium">
          {postData.body}
        </Text>
        <FlatList
          data={postData.tags}
          horizontal={true}
          bounces={false}
          renderItem={({ item }: { item: string }) => {
            return (
              <Tag
                text={`#${item}`}
                style={styles.tag}
                selected={true}
                isReverseColor={true}
                disabled={true}
              />
            );
          }}
        />
        <DetailMenuBar like={postData.like} comments={postData.comment} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BoardDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BG,
  },
  textAlign: {
    alignItems: 'flex-start',
    marginLeft: 48,
    justifyContent: 'center',
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  footer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  footerText: {
    color: THEME.LIGHT_TEXT,
  },
  tag: {
    marginRight: 12,
    marginVertical: 8,
  },
  body: {
    marginTop: 18,
    marginBottom: 20,
  },
});
