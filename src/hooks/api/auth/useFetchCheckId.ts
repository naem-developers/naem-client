import API from '@/api';
import { IReqCheckId } from '@/api/types/request';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEY from '../keys';

export default (body: IReqCheckId) => {
  // TODO: return type 정의하기
  const fetcher = async (): Promise<any> => {
    const res = await API.getCheckId(body);
    return res.data;
  };
  return useQuery([QUERY_KEY.FETCH_CHECK_ID], fetcher, {
    onError: (e) => {
      console.error('id 중복 체크 중 오류가 발생했습니다.');
    },
  });
};
