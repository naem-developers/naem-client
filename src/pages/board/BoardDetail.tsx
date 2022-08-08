import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/organisms/Header';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { THEME } from '@/theme';
import { DumyPostData } from '@pages/board/boards/dumys';
import Text from '@/components/atoms/Text';
import Tag from '@/components/molecules/Tag';

const BoardDetail = () => {
  const navigation = useNavigation();
  const scrollRef = useRef<ScrollView>(null);
  const postData = DumyPostData[0];

  return (
    <SafeAreaView style={styles.container} ref={scrollRef}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default BoardDetail;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: THEME.BG,
  },
  textAlign: {
    alignItems: 'flex-start',
    marginLeft: 48,
    justifyContent: 'center',
  },
  scrollView: {},
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
});
