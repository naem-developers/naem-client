import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface NotificationSettingProps {}

const NotificationSetting = (props: NotificationSettingProps) => {
  return (
    <View style={styles.container}>
      <Text>NotificationSetting</Text>
    </View>
  );
};

export default NotificationSetting;

const styles = StyleSheet.create({
  container: {},
});
