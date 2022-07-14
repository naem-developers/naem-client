import Text from '@/components/atoms/Text';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

interface LoginPageProps {}

const LoginPage = (props: LoginPageProps) => {
  return (
    <View style={styles.container}>
      <Text>LoginPage</Text>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {},
});
