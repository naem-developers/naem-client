import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ServiceTermsPageProps {}

const ServiceTermsPage = (props: ServiceTermsPageProps) => {
  return (
    <View style={styles.container}>
      <Text>ServiceTermsPage</Text>
    </View>
  );
};

export default ServiceTermsPage;

const styles = StyleSheet.create({
  container: {},
});
