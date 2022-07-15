import Header from '@/components/organisms/Header';
import * as React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SignUpPageProps {}

const SignUpPage = (props: SignUpPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="회원가입" />
      <ScrollView>
        <Text>SignUpPage</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {},
});
