import Text from '@/components/atoms/Text';
import Header from '@/components/organisms/Header';
import { THEME } from '@/theme';
import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface NotificationSettingPageProps {}

const NotificationSettingPage = (props: NotificationSettingPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="알림 설정" />
      <ScrollView>
        <Text>123</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationSettingPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
});
