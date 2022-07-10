import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface SignUpPageProps {}

function SignUpPage(props: SignUpPageProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SignUpPage</Text>
    </SafeAreaView>
  );
}

export default SignUpPage;

const styles = StyleSheet.create({
  container: {},
});
