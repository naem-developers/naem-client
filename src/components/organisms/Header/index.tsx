import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import IcnArrowLeftBlack from '@/assets/icons/icn_arrow_left_black.svg';
import { useNavigation, ParamListBase } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface HeaderProps {
  title?: string;
  LeftComponent?: React.ReactNode;
  RightComponent?: React.ReactNode;
  titleStyle?: ViewStyle;
  isTitleButton?: boolean;
  onPress?: () => void;
}

const BackButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <IcnArrowLeftBlack width={16} height={16} />
    </TouchableOpacity>
  );
};

const Header = ({
  title,
  titleStyle = {},
  LeftComponent = <BackButton />,
  RightComponent,
  onPress = () => {},
  isTitleButton = false,
}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.zIndex1}>{LeftComponent}</View>
      <TouchableOpacity
        style={[styles.titleContainer, titleStyle]}
        onPress={onPress}
        disabled={!isTitleButton}
      >
        <Text sizeStyle="f18" weightStyle="bold" style={styles.title}>
          {title}
        </Text>
      </TouchableOpacity>
      <View style={styles.zIndex1}>{RightComponent}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  zIndex1: {
    zIndex: 1,
  },
  titleContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: THEME.STRONG_TEXT,
  },
});
