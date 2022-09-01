import axios from 'axios';
import { IResponseGetRoot } from './types/response';
// @ts-ignore
import { API_URL } from 'react-native-dotenv';

const client = axios.create({ baseURL: API_URL });

/** api 정의가 이뤄지는 곳입니다. */
const API = {
  // getRoot는 예시를 위해 임의로 만들어 놓은 엔드포인트입니다.
  getRoot(): IResponseGetRoot {
    return client.get('/');
  },
};

export default API;
