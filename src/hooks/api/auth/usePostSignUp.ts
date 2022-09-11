import API from '@/api';
import { IReqSignUp } from '@/api/types/request';
import { useMutation } from '@tanstack/react-query';

export default () => {
  const mutation = async (body: IReqSignUp) => {
    const res = await API.postSignUp(body);
    return res;
  };

  return useMutation(mutation, {
    onError: (e: Error) => {
      console.error(e);
    },
  });
};
