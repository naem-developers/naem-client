import API from '@/api';
import { IReqSignIn } from '@/api/types/request';
import { useMutation } from '@tanstack/react-query';

export default () => {
  const mutation = async (body: IReqSignIn) => {
    const res = await API.postSignIn(body);
    return res;
  };

  return useMutation(mutation, {
    onError: (e: Error) => {
      console.error(e);
    },
  });
};
