import API from '@/api';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEY from '../keys';

export default () => {
  const fetcher = async (body: any): Promise<any> => {
    const res = await API.getCheckId(body);
    return res.data;
  };
  return useQuery([QUERY_KEY.FETCH_CHECK_ID], fetcher, {
    onError: (e) => {
      console.error('id 중복 체크 중 오류가 발생했습니다.');
    },
  });
};
