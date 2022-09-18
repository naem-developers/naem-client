import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Commnet from '@assets/icons/icn_comment.svg';
import ActiveHeart from '@assets/icons/icn_active_heart.svg';
import DisableHeart from '@assets/icons/icn_disable_heart.svg';
import Share from '@assets/icons/icn_share.svg';
import { THEME } from '@/theme';
import Text from '@/components/atoms/Text';

interface MenubarProps {
  like: number;
  comments: number;
  commentButtonPress: () => void;
}

const DetailMenuBar = ({ like, comments, commentButtonPress }: MenubarProps) => {
  const [isActivate, setIsActivate] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setIsActivate(!isActivate)}>
        {isActivate ? <ActiveHeart /> : <DisableHeart height={22} width={20} />}
        <Text style={styles.text} sizeStyle="f16" weightStyle="medium">
          {like}
        </Text>
      </TouchableOpacity>
      <View style={styles.bar} />
      <TouchableOpacity style={styles.button} onPress={commentButtonPress}>
        <Commnet />
        <Text style={styles.text} sizeStyle="f16" weightStyle="medium">
          {comments}
        </Text>
      </TouchableOpacity>
      <View style={styles.bar} />
      <TouchableOpacity style={styles.button}>
        <Share />
        <Text style={styles.text} sizeStyle="f16" weightStyle="medium">
          {'공유하기'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: THEME.LIGHT_TEXT,
    marginLeft: 9,
  },
  bar: {
    backgroundColor: THEME.LIGHT_TEXT,
    width: 1,
    height: 16,
  },
});

export default DetailMenuBar;
