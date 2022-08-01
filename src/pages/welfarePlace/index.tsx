import Text from '@/components/atoms/Text';
import { THEME } from '@/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Modal } from 'react-native-paper';

interface WelfarePlacePageProps {}

const WelfarePlacePage = (props: WelfarePlacePageProps) => {
  return (
    <View style={styles.container}>
      <Modal visible contentContainerStyle={styles.contentContainer} dismissable={false}>
        <Text sizeStyle="f17" weightStyle="semiBold" style={styles.text}>
          서비스 준비 중입니다
        </Text>
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
  },
  text: { color: THEME.STRONG_TEXT },
});
