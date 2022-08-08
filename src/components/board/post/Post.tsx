import Text from '@/components/atoms/Text';
import Tag from '@/components/molecules/Tag';
import { STANDARD_DEVICE_WIDTH } from '@/constants';
import { THEME } from '@/theme';
import { postedData } from '@/types';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

interface ProstProps {
  postedData: postedData;
  selectedKeywords: string[];
}

const Post = ({ postedData, selectedKeywords }: ProstProps) => {
  const navigation = useNavigation();
  const shortening = useCallback(
    (body: string) => {
      if (body.length * 15 > STANDARD_DEVICE_WIDTH - 32) return body.slice(0, 32) + '...';
      return body;
    },
    [postedData],
  );

  const navigateToDetail = () => {
    navigation.navigate('BoardDetail', { id: postedData.id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToDetail}>
      <Text sizeStyle="f16" weightStyle="semiBold">
        {postedData.title}
      </Text>
      <Text style={styles.bodyText} sizeStyle="f15" weightStyle="medium">
        {shortening(postedData.body)}
      </Text>
      <FlatList
        data={postedData.tags}
        horizontal={true}
        bounces={false}
        renderItem={({ item }: { item: string }) => {
          return (
            <Tag
              text={`#${item}`}
              style={styles.tag}
              selected={selectedKeywords.includes(item)}
              disabled={true}
            />
          );
        }}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText} sizeStyle="f13" weightStyle="medium">
          {postedData.userId}
        </Text>
        <Text style={styles.footerText} sizeStyle="f13" weightStyle="medium">
          {`·  좋아요 ${postedData.like}`}
        </Text>
        <Text style={styles.footerText} sizeStyle="f13" weightStyle="medium">
          {`댓글 ${postedData.comment}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    borderBottomColor: THEME.LIGHT_LINE,
    borderBottomWidth: 1,
  },
  bodyText: {
    color: THEME.REG_TEXT,
  },
  tag: {
    marginRight: 12,
    marginVertical: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  footerText: {
    color: THEME.LIGHT_TEXT,
    marginLeft: 10,
  },
});
