import { THEME } from '@/theme';
import * as React from 'react';
import { Text, View, StyleSheet, ViewProps } from 'react-native';

interface ProcessProps extends ViewProps {
  currentStep?: number;
  maxStep?: number;
}

const Process = ({ currentStep = 1, maxStep = 3, style, ...props }: ProcessProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {Array.from(Array(maxStep).keys()).map((item, index, { length }) => {
        return (
          <>
            <View style={styles.currentStep} />
            {index !== length - 1 && <View style={styles.line} />}
          </>
        );
      })}
    </View>
  );
};

export default Process;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', alignSelf: 'center' },
  currentStep: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: THEME.POINT_YELLOW,
  },
  line: { backgroundColor: '#E4E4E4', width: 48, height: 1.5 },
});
