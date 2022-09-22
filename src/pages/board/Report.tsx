import Header from '@/components/organisms/Header';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cross from '@assets/icons/icn_cross.svg';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import Text from '@/components/atoms/Text';
import { RootStackParamList } from '@/navigators/RootStackNavigator';
import Button from '@/components/atoms/Button';
import { RadioButton } from 'react-native-paper';
import { THEME } from '@/theme';
import TextInput from '@/components/atoms/TextInput';

const REPORT_TYPE = {
  LACK_INFO: 'lack_of_information',
  INCONVENIENCE: 'inconvenience',
  NO_COMMUNICATION: 'no_communication',
  NEGLECT: 'neglect',
  ETC: 'etc',
};

interface ReportProps extends NativeStackScreenProps<RootStackParamList, 'Report'> {}

const ClosePage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Cross />
    </TouchableOpacity>
  );
};

const InfoText = ({ title, value }: { title: string; value: string | undefined }) => {
  return (
    <View style={styles.info}>
      <Text sizeStyle="f16" colorStyle="regText" style={styles.title}>
        {title}
      </Text>
      <Text
        sizeStyle="f16"
        weightStyle="semiBold"
        numberOfLines={1}
        ellipsizeMode={'tail'}
        style={styles.value}
      >
        {value}
      </Text>
    </View>
  );
};

const RadioValueButton = ({
  value,
  typeValue,
  text,
  setCheckedValue,
}: {
  value: string;
  typeValue: string;
  text: string;
  setCheckedValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <View style={styles.button}>
      <RadioButton.Android
        value={typeValue}
        status={value === typeValue ? 'checked' : 'unchecked'}
        onPress={() => setCheckedValue(typeValue)}
      />
      <Text sizeStyle="f15" weightStyle="medium" colorStyle="regText">
        {text}
      </Text>
    </View>
  );
};

const Report = ({ route }: ReportProps) => {
  const reportData = route?.params?.data;
  const [checkedValue, setCheckedValue] = useState<string>(REPORT_TYPE.LACK_INFO);
  const [etcValue, setEtcValue] = useState<string>();

  useEffect(() => {
    if (checkedValue !== REPORT_TYPE.ETC) setEtcValue(undefined);
  }, [checkedValue]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <SafeAreaView style={styles.container}>
        <Header title="신고하기" LeftComponent={<ClosePage />} />
        <View style={styles.inner}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text weightStyle="semiBold" sizeStyle="f19" style={styles.reportTitle}>
              신고 정보
            </Text>
            <InfoText title={'내용'} value={reportData?.body} />
            <InfoText title={'작성자'} value={reportData.userId} />
            <InfoText title={'작성일'} value={reportData.createdAt.toDateString()} />
            <View style={styles.buttons}>
              <Text sizeStyle="f14" colorStyle="regText" style={styles.subTitle}>
                신고사유
              </Text>
              <RadioValueButton
                value={checkedValue}
                typeValue={REPORT_TYPE.LACK_INFO}
                setCheckedValue={setCheckedValue}
                text={'얻을 만한 정보나 의견이 부족함'}
              />
              <RadioValueButton
                value={checkedValue}
                typeValue={REPORT_TYPE.INCONVENIENCE}
                setCheckedValue={setCheckedValue}
                text={'사용하기 불편하고 어려움'}
              />
              <RadioValueButton
                value={checkedValue}
                typeValue={REPORT_TYPE.NO_COMMUNICATION}
                setCheckedValue={setCheckedValue}
                text={'회원들 간의 소통이 잘 이루어지지 않음'}
              />
              <RadioValueButton
                value={checkedValue}
                typeValue={REPORT_TYPE.NEGLECT}
                setCheckedValue={setCheckedValue}
                text={'커뮤니티 관리가 잘 이루어지지 않음(욕설, 비방 등)'}
              />
              <RadioValueButton
                value={checkedValue}
                typeValue={REPORT_TYPE.ETC}
                setCheckedValue={setCheckedValue}
                text={'기타'}
              />
              <TextInput
                value={etcValue}
                onChangeText={(text) => setEtcValue(text)}
                placeholder="기타 사유를 입력해 주세요(15자 이내)"
                editable={checkedValue === REPORT_TYPE.ETC}
              />
            </View>
          </ScrollView>
          <Button text={'신고하기'} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BG,
  },
  inner: {
    flex: 1,
    paddingHorizontal: 16,
  },
  reportTitle: {
    marginTop: 22,
    marginBottom: 8,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  title: {
    marginRight: 10,
  },
  subTitle: {
    marginBottom: 10,
  },
  value: {
    width: '90%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    paddingTop: 22,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: THEME.LIGHT_BOX,
  },
});

export default Report;
