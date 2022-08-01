import Text from '@/components/atoms/Text';
import TextBtn from '@/components/atoms/TextBtn';
import { THEME } from '@/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Modal } from 'react-native-paper';
import IcnExclamationMark from '@/assets/icons/icn_exclamation_mark.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface WelfarePlacePageProps {}

const WelfarePlacePage = (props: WelfarePlacePageProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Modal visible contentContainerStyle={styles.contentContainer} dismissable={false}>
        <IcnExclamationMark width={60} height={60} />
        <Text sizeStyle="f17" weightStyle="semiBold" style={styles.text}>
          서비스 준비 중입니다
        </Text>
        <View style={[styles.divider]} />
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
    marginHorizontal: 80,
    paddingTop: 24,
    paddingBottom: 20,
    borderRadius: 20,
  },
  text: { color: THEME.STRONG_TEXT, marginTop: 16 },
  divider: {
    height: 1,
    backgroundColor: THEME.LIGHT_LINE,
    marginTop: 20,
    marginBottom: 16,
    width: '100%',
  },
  btnText: { color: THEME.REG_TEXT },
});
