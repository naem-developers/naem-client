import * as React from 'react';
import {Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {SafeAreaView} from 'react-native-safe-area-context';

// eslint-disable-next-line ßno-unused-vars
interface LandingPageProps {}

// eslint-disable-next-line react/function-component-definition
const LandingPage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text>LandingPage</Text>
      <Button
        title="signup page"
        onPress={() => {
          navigation.push('SignUpStackNavigator');
        }}
      />
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {},
});
