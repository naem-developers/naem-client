import Text from '@/components/atoms/Text';
import TextBtn from '@/components/atoms/TextBtn';
import { THEME } from '@/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Modal } from 'react-native-paper';
import IcnExclamationMark from '@/assets/icons/icn_exclamation_mark.svg';

interface WelfarePlacePageProps {}

const WelfarePlacePage = (props: WelfarePlacePageProps) => {
  return (
    <View style={styles.container}>
      <Modal visible contentContainerStyle={styles.contentContainer} dismissable={false}>
        <IcnExclamationMark width={60} height={60} />
        <Text sizeStyle="f17" weightStyle="semiBold" style={styles.text}>
          서비스 준비 중입니다
        </Text>
        <View style={styles.divider} />
        <TextBtn text="확인" textStyle={styles.btnText} sizeStyle="f17" weightStyle="semiBold" />
      </Modal>
    </View>
  );
};

export default WelfarePlacePage;

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: {
    backgroundColor: THEME.BG,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 80,
    paddingTop: 24,
    paddingBottom: 20,
    borderRadius: 20,
    marginHorizontal: 45,
  },
  text: { color: THEME.STRONG_TEXT, marginTop: 16 },
  divider: {
    height: 1,
    backgroundColor: 'red',
    alignSelf: 'stretch',
    marginTop: 20,
    marginBottom: 16,
  },
  btnText: { color: THEME.REG_TEXT },
});
