import API from '@/api';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEY from '../keys';

export default () => {
  // TODO: return type 정의하기
  const fetcher = async (): Promise<any> => {
    const res = await API.getMemberProfile();
    return res.data;
  };
  return useQuery([QUERY_KEY.FETCH_MEMBER_PROFILE], fetcher, {
    onError: (e) => {
      console.error('회원 정보를 가져오는 중 오류가 발생했습니다.', e);
    },
  });
};
