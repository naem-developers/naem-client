import { THEME } from '@/theme';
import React, { Fragment } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';

interface ProcessProps extends ViewProps {
  currentStep?: number;
  maxStep?: number;
}

const Process = ({ currentStep = 1, maxStep = 4, style, ...props }: ProcessProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {Array.from(Array(maxStep - 1).keys()).map((item, index, { length }) => {
        return (
          <Fragment key={item}>
            <View
              style={[
                styles.dot,
                currentStep - 1 > item
                  ? styles.done
                  : currentStep - 1 === item
                  ? styles.currentStep
                  : styles.notDone,
              ]}
            />
            {index !== length - 1 && (
              <View
                style={[
                  styles.line,
                  currentStep - 1 > item ? styles.coloredLine : styles.unColoredLine,
                ]}
              />
            )}
          </Fragment>
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
  dot: { width: 8, height: 8, borderRadius: 4 },
  notDone: {
    borderWidth: 1.5,
    borderColor: '#E4E4E4',
    backgroundColor: '#FFFFFF',
  },
  done: {
    backgroundColor: THEME.POINT_YELLOW,
  },
  line: { width: 48, height: 1.5 },
  unColoredLine: { backgroundColor: '#E4E4E4' },
  coloredLine: { backgroundColor: THEME.POINT_YELLOW },
});
