import API from '@/api';
import { IResponse } from '@/api/types';
import { IReqCheckId } from '@/api/types/request';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEY from '../keys';

export default (params: IReqCheckId, enabled: boolean = false) => {
  const fetcher = async (): Promise<IResponse> => {
    const res = await API.getCheckId(params);
    return res.data;
  };
  return useQuery([QUERY_KEY.FETCH_CHECK_NICKNAME], fetcher, {
    enabled,
    onError: (e) => {
      console.error('닉네임 중복 체크 중 오류가 발생했습니다.', e);
    },
  });
};
