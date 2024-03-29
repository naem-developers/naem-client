import Button, { ButtonProps } from '@/components/atoms/Button';
import Header from '@/components/organisms/Header';
import Process from '@/components/signup/process';
import { H_PADDING } from '@/constants';
import { THEME } from '@/theme';
import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

interface SignUpTemplateProps extends React.PropsWithChildren {
  currentStep?: number;
  btnProps?: Partial<ButtonProps>;
}

const SignUpTemplate = ({ currentStep, btnProps, children }: SignUpTemplateProps) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="회원가입" />
      <Process style={styles.process} currentStep={currentStep} />
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
      <View style={[styles.ctaContainer, { bottom: 20 + insets.bottom }]}>
        <Button text="다음" {...btnProps} />
      </View>
    </SafeAreaView>
  );
};

export default SignUpTemplate;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
  ctaContainer: { position: 'absolute', left: H_PADDING, right: H_PADDING },
  process: { marginTop: 24, marginBottom: 32 },
  contentContainerStyle: { paddingHorizontal: H_PADDING },
});
