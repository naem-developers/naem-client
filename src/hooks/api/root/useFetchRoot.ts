import API from '@/api';
import { IResponseGetRoot } from '@/api/types/response';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEY from '../keys';

export default () => {
  const fetcher = async (): Promise<IResponseGetRoot> => {
    const res = await API.getRoot();
    return res.data;
  };
  return useQuery([QUERY_KEY.FETCH_ROOT], fetcher, {
    onError: (e) => {
      console.error('root api를 호출하는 데 실패했습니다. ', e);
    },
  });
};
