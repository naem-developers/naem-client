import React, { useState } from 'react';
import { Platform, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Comments } from '@/types';
import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import MenuIcon from '@assets/icons/icn_menu_dot.svg';
import ActiveHeart from '@assets/icons/icn_active_heart.svg';
import DisableHeart from '@assets/icons/icn_disable_heart.svg';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import MenuButton from './MenuButton';

interface CommentProps {
  comment: Comments;
}

const CommentItem = ({ comment }: CommentProps) => {
  const [isLike, setIsLike] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.useInfo}>
          <Image style={styles.image} source={require('@/assets/images/img_profile_photo.png')} />
          <Text colorStyle="regText" sizeStyle="f16" weightStyle="medium">
            {comment.userId}
          </Text>
        </View>
        <MenuButton />
      </View>
      <Text style={styles.body} sizeStyle="f17" numberOfLines={1} ellipsizeMode={'tail'}>
        {comment.commnet}
      </Text>
      <View style={styles.header}>
        <Text colorStyle="regText" sizeStyle="f16" weightStyle="medium">
          {comment.date.toDateString()}
        </Text>
        <TouchableOpacity style={styles.likeButton} onPress={() => setIsLike(!isLike)}>
          {!isLike ? (
            <DisableHeart height={14} width={14} style={styles.icon} />
          ) : (
            <ActiveHeart height={14} width={14} style={styles.icon} />
          )}
          <Text colorStyle="regText" sizeStyle="f13" weightStyle="semiBold">
            {comment.like}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 123,
    width: '100%',
    borderBottomWidth: 1,
    marginTop: 17,
    borderColor: THEME.LIGHT_BOX,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  useInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 27,
    width: 27,
    marginRight: 10,
  },
  body: {
    marginVertical: 14,
  },
  likeButton: {
    borderRadius: 50,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: THEME.LIGHT_BOX,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});

export default CommentItem;
