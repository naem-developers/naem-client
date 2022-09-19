import API from '@/api';
import { IReqSignIn } from '@/api/types/request';
import { applyToken } from '@/utils/auth';
import { useMutation } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import EncryptedStorage from 'react-native-encrypted-storage';
import { USER_STORAGE_KEY } from '@/constants/storageKeys';
import { useNavigation } from '@react-navigation/core';
import { CommonActions, ParamListBase } from '@react-navigation/routers';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const mutation = async (body: IReqSignIn) => {
    const res = await API.postSignIn(body);
    return res;
  };

  return useMutation(mutation, {
    onSuccess: (res) => {
      Toast.show({ type: 'success', text1: '로그인에 성공하였습니다.' });
      applyToken(res.data.access_token);
      EncryptedStorage.setItem(
        USER_STORAGE_KEY,
        JSON.stringify({ accessToken: res.data.access_token, refreshToken: res.data.refresh }),
      );
      navigation.dispatch(
        CommonActions.reset({ index: 0, routes: [{ name: 'MainTabNavigator' }] }),
      );
    },

    onError: (e) => {
      Toast.show({ type: 'error', text1: '로그인에 실패하였습니다.' });
      if (__DEV__) {
        navigation.dispatch(
          CommonActions.reset({ index: 0, routes: [{ name: 'MainTabNavigator' }] }),
        );
      }
      console.error('login err, ', e);
    },
  });
};
