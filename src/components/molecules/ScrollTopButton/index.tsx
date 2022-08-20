import React, { RefObject } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import ArriwUpWhite from '@assets/icons/icn_arrow_up_white.svg';

const ScrollTopButton = ({ commonRef }: { commonRef: RefObject<any> }) => (
  <TouchableOpacity
    style={styles.upScrollButton}
    onPress={() => commonRef.current?.scrollToOffset({ animated: true, offset: 0 })}
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
