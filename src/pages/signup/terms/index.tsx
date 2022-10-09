import Text from '@/components/atoms/Text';
import SignUpTemplate from '@/components/signup/signUpTemplate';
import Title from '@/components/signup/title';
import { H_PADDING } from '@/constants';
import { SERVICE_TERMS_HTML } from '@/constants/terms';
import { SignUpStackParamList } from '@/navigators/SignUpStackNavigator';
import { THEME } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import  React, { useCallback, useMemo, useState } from 'react';
import { Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { Checkbox } from 'react-native-paper';

const SERVICE_TERM_LIST = {
  SERVICE_OVERVIEW: '서비스 개요',
  SIGN_UP_PROCESS: '회원 가입 절차',
  COMMUNITY_RULE: '커뮤니티 이용 수칙',
  SERVICE_WITHDRAWL_POLICY: '서비스 탈퇴 정책',
};

const PERSONAL_INFORMATION_LIST = {
  PERSONAL_INFO_POLICY: '개인정보 처리 방침',
  FEEDBACK: '피드백 및 소통',
  NOTICE: '약관 및 운영정책 공지',
};

const ALL_CHECKED_LIST=[...Object.values(SERVICE_TERM_LIST), ...Object.values(PERSONAL_INFORMATION_LIST)];

interface TermsPageProps extends NativeStackScreenProps<SignUpStackParamList, 'TermsPage'> {}

const TermsPage = ({ navigation, route }: TermsPageProps) => {

  const [checkedList, setCheckedList]=useState<string[]>([]);

  const isAllChecked=useMemo(()=>Object.values(ALL_CHECKED_LIST).every(val=>checkedList.includes(val)), [checkedList])

  const handleCheckPress=useCallback((checkedItem:string)=>{
    if(!Object.values(SERVICE_TERM_LIST).includes(checkedItem)&&!Object.values(PERSONAL_INFORMATION_LIST).includes(checkedItem)) return;


    if(checkedList.includes(checkedItem)){
      setCheckedList(checkedList.filter(item=>item!==checkedItem))
    }else{
      setCheckedList([...checkedList, checkedItem])
    }
  }, [checkedList])

  return (
    <SignUpTemplate
      currentStep={1}
      btnProps={{
        onPress: () =>
          navigation.navigate('UserTypeSelectPage', { loginInfo: route.params.loginInfo }),
        disabled:!isAllChecked
        }}
    >
      <Title step={1} text="이용약관" />
      <Text sizeStyle="f14" weightStyle="medium" colorStyle="regText" style={styles.mt6}>
        회원가입 전 이용약관에 동의해주세요
      </Text>
      <Pressable style={styles.checkAllContainer} onPress={()=>{
        setCheckedList(isAllChecked?[]:ALL_CHECKED_LIST)
      }}>
        <Checkbox.Android
            status={isAllChecked ? 'checked' : 'unchecked'}
            uncheckedColor="#c9c9c9"
        />
        <Text sizeStyle="f14" weightStyle="medium" colorStyle='strongText'>
          모두 동의
        </Text>
      </Pressable>
      <View style={styles.checkBoxContainer}>
        <View style={styles.row}>
          <Checkbox.Android
            status={Object.values(SERVICE_TERM_LIST).every(val=>checkedList.includes(val)) ? 'checked' : 'unchecked'}
            uncheckedColor="#c9c9c9"
          />
          <Text sizeStyle="f14" weightStyle="medium" colorStyle='lightText'>
            이용약관 >
          </Text>
        </View>
        {Object.values(SERVICE_TERM_LIST).map((item, index)=>{
          return <Pressable key={`${item}-${index}`} style={[styles.row, styles.ml20]} onPress={()=>handleCheckPress(item)}>
          <Checkbox.Android
            status={checkedList.includes(item) ? 'checked' : 'unchecked'}
            uncheckedColor="#c9c9c9"
          />
          <Text sizeStyle="f14" weightStyle="medium" colorStyle='lightText'>
            {item}
          </Text>
        </Pressable>
        })}
        <View style={[styles.row, styles.mt28]}>
          <Checkbox.Android
            status={Object.values(PERSONAL_INFORMATION_LIST).every(val=>checkedList.includes(val)) ? 'checked' : 'unchecked'}
            uncheckedColor="#c9c9c9"
          />
          <Text sizeStyle="f14" weightStyle="medium" colorStyle='lightText'>
            개인정보 처리 및 소통 >
          </Text>
        </View>
        {Object.values(PERSONAL_INFORMATION_LIST).map((item, index)=>{
          return <Pressable key={`${item}-${index}`} style={[styles.row, styles.ml20]} onPress={()=>handleCheckPress(item)}>
          <Checkbox.Android
            status={checkedList.includes(item) ? 'checked' : 'unchecked'}
            uncheckedColor="#c9c9c9"
          />
          <Text sizeStyle="f14" weightStyle="medium" colorStyle='lightText'>
            {item}
          </Text>
        </Pressable>
        })}
      </View>
      {/* <AutoHeightWebView
        containerStyle={{ width: width - H_PADDING * 2 }}
        source={{ html: SERVICE_TERMS_HTML }}
      /> */}
    </SignUpTemplate>
  );
};

export default TermsPage;

const styles = StyleSheet.create({
  checkAllContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  checkBoxContainer: {
    paddingHorizontal: 10,
    paddingVertical: 18,
    backgroundColor: THEME.LIGHT_GRAY,
    borderRadius: 10,
  },
  row:{flexDirection:'row', alignItems:'center'},
  mt6: { marginTop: 6 },
  mt28:{marginTop:28},
  ml20:{marginLeft:20}
});
