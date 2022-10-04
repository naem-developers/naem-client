import API from '@/api';
import { IResponse } from '@/api/types';
import { IReqCheckId, IReqCheckNickname } from '@/api/types/request';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import QUERY_KEY from '../keys';

export default (
  params: IReqCheckNickname,
  enabled: boolean = false,
  options: Pick<UseQueryOptions, 'onError'> = {},
) => {
  const fetcher = async (): Promise<IResponse> => {
    const res = await API.getCheckNickname(params);
    return res.data;
  };
  return useQuery([QUERY_KEY.FETCH_CHECK_NICKNAME], fetcher, {
    enabled,
    onError: (e) => {
      console.error('닉네임 중복 체크 중 오류가 발생했습니다.', e);
    },
    ...options,
  });
};
