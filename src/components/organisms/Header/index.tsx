import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import IcnArrowLeftBlack from '@/assets/icons/icn_arrow_left_black.svg';
import { useNavigation } from '@react-navigation/core';

interface HeaderProps {
  title?: string;
  LeftComponent?: React.ReactNode;
  RightComponent?: React.ReactNode;
}

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <IcnArrowLeftBlack width={16} height={16} />
    </TouchableOpacity>
  );
};

const Header = ({ title, LeftComponent = <BackButton />, RightComponent }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.zIndex1}>{LeftComponent}</View>
      <View style={styles.titleContainer}>
        <Text sizeStyle="f18" weightStyle="bold" style={styles.title}>
          {title}
        </Text>
      </View>
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
