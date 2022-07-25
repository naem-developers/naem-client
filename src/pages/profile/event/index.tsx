import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface EventPageProps {}

const EventPage = (props: EventPageProps) => {
  return (
    <View style={styles.container}>
      <Text>EventPage</Text>
    </View>
  );
};

export default EventPage;

const styles = StyleSheet.create({
  container: {},
});
