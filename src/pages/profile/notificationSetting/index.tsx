import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface NotificationSettingPageProps {}

const NotificationSettingPage = (props: NotificationSettingPageProps) => {
  return (
    <View style={styles.container}>
      <Text>NotificationSettingPage</Text>
    </View>
  );
};

export default NotificationSettingPage;

const styles = StyleSheet.create({
  container: {},
});
