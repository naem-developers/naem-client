import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';
import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface LoginPageProps {}

const LoginPage = (props: LoginPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>LoginPage</Text>
        <Button text="123" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {},
});
