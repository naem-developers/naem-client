import API from '@/api';
import { IReqPatchMemberProfile } from '@/api/types/request';
import { useMutation } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

export default () => {
  const mutation = async (body: IReqPatchMemberProfile) => {
    const res = await API.patchMemberProfile(body);
    return res.data;
  };

  return useMutation(mutation, {
    onError: (e: Error) => {
      Toast.show({ type: 'error', text1: '프로필 업데이트 중 오류가 발생했습니다.' });
      console.error('patch profile error, ', e);
    },
  });
};
