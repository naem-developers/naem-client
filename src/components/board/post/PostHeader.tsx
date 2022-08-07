import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import DownArrow from '@assets/icons/icn_triangle_down.svg';

interface PostHeaderProps {
  showModal: () => void;
  sortValue: string;
}

const PostHeader = ({ sortValue, showModal }: PostHeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.sort}>
        <Text style={styles.title} sizeStyle="f13" weightStyle="light">
          등록 게시글
        </Text>
        <Text style={styles.subTitle} sizeStyle="f12" weightStyle="light">
          {`0건`}
        </Text>
      </View>
      <TouchableOpacity onPress={showModal} style={styles.sort}>
        <Text style={styles.title} sizeStyle="f14" weightStyle="regular">
          {sortValue}
        </Text>
        <DownArrow />
      </TouchableOpacity>
    </View>
  );
};

export default PostHeader;

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
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  sort: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
