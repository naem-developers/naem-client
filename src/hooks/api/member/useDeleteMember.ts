import API from '@/api';
import { useMutation } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

export default () => {
  const mutation = async () => {
    const res = await API.deleteMember();
    return res.data;
  };

  return useMutation(mutation, {
    onError: (e: Error) => {
      Toast.show({ type: 'error', text1: '회원 탈퇴 중 오류가 발생했습니다.' });
      console.error('delete member error, ', e);
    },
  });
};
