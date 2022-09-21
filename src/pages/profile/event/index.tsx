import Header from '@/components/organisms/Header';
import { THEME } from '@/theme';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface EventPageProps {}

const EventPage = (props: EventPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="이벤트" />
    </SafeAreaView>
  );
};

export default EventPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BG,
  },
});
