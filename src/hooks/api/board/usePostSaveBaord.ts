import API from '@/api';
import { useMutation } from '@tanstack/react-query';

import { useNavigation } from '@react-navigation/core';
import { ParamListBase } from '@react-navigation/routers';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IReqSaveBoard } from '@/api/types/board';

export default () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const mutation = async (body: IReqSaveBoard) => {
    const res = await API.postSaveBoard(body);
    return res;
  };

  return useMutation(mutation, {
    retry: 2,
    onSuccess: (res) => {
      console.log('res.data', res.data);
      return res.data;
    },
    onError: (e) => {
      console.error('failed saved post', e);
    },
  });
};
