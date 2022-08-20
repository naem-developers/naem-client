import React, { RefObject } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, FlatList, ViewStyle } from 'react-native';
import ArriwUpWhite from '@assets/icons/icn_arrow_up_white.svg';

const ScrollTopButton = ({
  commonRef,
  scrollAction,
  marginBottom = 0,
}: {
  commonRef: RefObject<ScrollView | FlatList>;
  scrollAction: () => void;
  marginBottom?: number;
}) => (
  <TouchableOpacity
    style={[styles.upScrollButton, { marginBottom: marginBottom }]}
    onPress={scrollAction}
  >
    <ArriwUpWhite />
  </TouchableOpacity>
);

export default ScrollTopButton;

const styles = StyleSheet.create({
  upScrollButton: {
    width: 41,
    height: 41,
    borderRadius: 50,
    right: 16,
    bottom: 100,
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03DBB2',
    position: 'absolute',
  },
});
