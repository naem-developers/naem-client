import Text from '@/components/atoms/Text';
import { H_PADDING } from '@/constants';
import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import IcnArticle from '@/assets/icons/icn_article.svg';
import IcnComment from '@/assets/icons/icn_comment.svg';
import { THEME } from '@/theme';
import { format, isSameYear } from 'date-fns';

export interface IconListItemProps extends TouchableOpacityProps {
  type: 'comment' | 'post';
  board: string;
  title: string;
  body: string;
  createdAt: Date;
}

const IconMapper = {
  comment: IcnComment,
  post: IcnArticle,
};

const IconListItem = ({
  type,
  board,
  title,
  body,
  createdAt,
  style,
  ...props
}: IconListItemProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      {IconMapper[type]({ width: 24, height: 24 })}
      <View style={styles.bodyContainer}>
        <Text
          sizeStyle="f13"
          weightStyle="semiBold"
          numberOfLines={1}
          style={[styles.flex1, styles.board]}
        >
          {board}
        </Text>
        <Text
          sizeStyle="f16"
          weightStyle="bold"
          numberOfLines={1}
          style={[styles.flex1, styles.title]}
        >
          {title}
        </Text>
        <Text
          sizeStyle="f15"
          weightStyle="medium"
          numberOfLines={1}
          style={[styles.flex1, styles.body]}
        >
          {body}
        </Text>
        <Text
          sizeStyle="f13"
          weightStyle="regular"
          numberOfLines={1}
          style={[styles.flex1, styles.createdAt]}
        >
          {format(createdAt, isSameYear(createdAt, new Date()) ? 'MM/dd HH:mm' : 'yy/MM/dd HH:mm')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default IconListItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: H_PADDING,
    paddingTop: 16,
    paddingBottom: 12,
    flexDirection: 'row',
  },
  bodyContainer: {
    flexDirection: 'column',
    marginLeft: 14,
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  board: {
    color: THEME.LIGHT_TEXT,
  },
  title: {
    marginTop: 1,
    color: THEME.STRONG_TEXT,
  },
  body: {
    marginTop: 1,
    color: THEME.REG_TEXT,
  },
  createdAt: {
    marginTop: 1,
    color: THEME.LIGHT_TEXT,
  },
});
