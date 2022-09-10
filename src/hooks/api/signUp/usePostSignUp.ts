import API from '@/api';
import { IReqSignUp } from '@/api/types/request';
import { useMutation } from '@tanstack/react-query';

export default (body: IReqSignUp) => {
  const mutation = async () => {
    const res = await API.postSignUp(body);
    return res;
  };

  return useMutation(mutation, {
    onError: (e: Error) => {
      console.error(e);
    },
  });
};
