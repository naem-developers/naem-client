import { THEME } from '@/theme';
import * as React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';

interface ProcessProps extends ViewProps {
  currentStep?: number;
  maxStep?: number;
}

const Process = ({ currentStep = 2, maxStep = 3, style, ...props }: ProcessProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {Array.from(Array(maxStep).keys()).map((item, index, { length }) => {
        return (
          <>
            <View
              style={
                currentStep - 1 > item
                  ? styles.done
                  : currentStep - 1 === item
                  ? styles.currentStep
                  : styles.notDone
              }
            />
            {index !== length - 1 && (
              <View style={currentStep - 1 > item ? styles.coloredLine : styles.line} />
            )}
          </>
        );
      })}
    </View>
  );
};

export default Process;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  currentStep: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: THEME.POINT_YELLOW,
    backgroundColor: '#FFFFFF',
  },
  notDone: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#E4E4E4',
    backgroundColor: '#FFFFFF',
  },
  done: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: THEME.POINT_YELLOW,
  },
  line: { backgroundColor: '#E4E4E4', width: 48, height: 1.5 },
  coloredLine: { backgroundColor: THEME.POINT_YELLOW, width: 48, height: 1.5 },
});
