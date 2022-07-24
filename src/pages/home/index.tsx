import { THEME } from '@/theme';
import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container]}>
      <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
        <Image style={styles.catchPhrase} source={require('@/assets/images/img_catchphrase.png')} />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerContainer: {
    backgroundColor: THEME.MAIN,
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  catchPhrase: {
    width: 205,
    height: 48,
  },
});
