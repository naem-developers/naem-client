import Loader from '@/components/atoms/Loader';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoadingTemplate = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Loader />
    </SafeAreaView>
  );
};

export default LoadingTemplate;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
