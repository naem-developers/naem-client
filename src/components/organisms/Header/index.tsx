import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import IcnArrowLeft from '@/assets/icons/icn_arrow_left.svg';
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
      <IcnArrowLeft width={16} height={16} />
    </TouchableOpacity>
  );
};

const Header = ({ title, LeftComponent = <BackButton />, RightComponent }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.zIndex1}>{LeftComponent}</View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
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
    fontSize: 18,
    color: THEME.STRONG_TEXT,
    fontWeight: '700',
  },
});
