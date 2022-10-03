import API from '@/api';
import { IReqAuthDisabled } from '@/api/types/request';
import { useMutation } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

export default () => {
  const mutation = async (body: IReqAuthDisabled) => {
    const res = await API.postAuthDisabled(body);
    return res.data;
  };

  return useMutation(mutation, {
    onError: (e) => {
      Toast.show({ type: 'error', text1: '장애인 인증 정보 요청에 실패하였습니다.' });
      console.error('postAuthDisabled error, ', e);
    },
  });
};
