import API from '@/api';
import { IReqSignIn } from '@/api/types/request';
import { applyToken } from '@/utils/auth';
import { useMutation } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

export default () => {
  const mutation = async (body: IReqSignIn) => {
    const res = await API.postSignIn(body);
    return res;
  };

  return useMutation(mutation, {
    onSuccess: (res) => {
      Toast.show({ type: 'success', text1: '로그인에 성공하였습니다.' });
      applyToken(res.data.access_token);
    },
    onError: (e) => {
      Toast.show({ type: 'error', text1: '로그인에 실패하였습니다.' });
      console.error('login err, ', e);
    },
  });
};
