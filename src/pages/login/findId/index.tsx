import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import IcnCheck from '@/assets/icons/icn_check.svg';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Text from '@/components/atoms/Text';
import Header from '@/components/organisms/Header';
import { H_PADDING } from '@/constants';
import { THEME } from '@/theme';
import Button from '@/components/atoms/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigators/AuthStackNavigator';
import { CommonActions, StackActions } from '@react-navigation/routers';
interface FindIdPageProps extends NativeStackScreenProps<AuthStackParamList, 'FindIdPage'> {}
{
}

const FindIdPage = ({ navigation }: FindIdPageProps) => {
  const insets = useSafeAreaInsets();

  const handlePressCTA = React.useCallback(() => {
    // navigation.dispatch(StackActions.replace('LoginPage'));
    navigation.dispatch(CommonActions.reset({ routes: [{ name: 'LoginPage' }] }));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="아이디 찾기" />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <IcnCheck width={53} height={53} />
        <Text sizeStyle="f19" weightStyle="semiBold" style={styles.text}>
          아이디 찾기 완료!
        </Text>
        <View style={styles.idContainer}>
          <Text sizeStyle="f15" weightStyle="medium" style={styles.black}>
            회원님의 아이디는 아래와 같습니다
          </Text>
          <Text sizeStyle="f20" weightStyle="semiBold" colorStyle="main" style={styles.mt12}>
            naem12341234
          </Text>
        </View>
      </ScrollView>
      <View style={[styles.cta, { marginBottom: insets.bottom }]}>
        <Button text="완료" onPress={handlePressCTA} />
      </View>
    </SafeAreaView>
  );
};

export default FindIdPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.BG },
  contentContainerStyle: {
    paddingHorizontal: H_PADDING,
    alignItems: 'center',
    paddingTop: 135,
    paddingBottom: 20,
  },
  text: { color: '#000000', marginTop: 24 },
  black: { color: '#000000' },
  idContainer: {
    backgroundColor: THEME.LIGHT_GRAY,
    padding: 24,
    marginTop: 24,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  cta: { paddingHorizontal: H_PADDING, bottom: 20, position: 'absolute', width: '100%' },
  mt12: { marginTop: 12 },
});
