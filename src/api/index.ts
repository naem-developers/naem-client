import { USER_STORAGE_KEY } from '@/constants/storageKeys';
import axios from 'axios';
// @ts-ignore
import { API_URL } from 'react-native-dotenv';
import {
  IReqCheckId,
  IReqPatchMemberProfile,
  IReqCheckNickname,
  IReqSignIn,
  IReqSignUp,
  IReqPostRegenerateToken,
} from './types/request';
import EncryptedStorage from 'react-native-encrypted-storage';
import { applyToken, clearToken } from '@/utils/auth';
import Toast from 'react-native-toast-message';
import { globalState } from '@/store/atoms';
import { useRecoilState } from 'recoil';

export const client = axios.create({ baseURL: API_URL });

client.interceptors.response.use(
  (response) => {},
  async (error) => {
    const [state, setState] = useRecoilState(globalState);

    try {
      if (error.response.status === 401) {
        const auth = await EncryptedStorage.getItem(USER_STORAGE_KEY);
        if (!auth) return;
        const authDataInJsonFormat = JSON.parse(auth);
        const res = await API.postRegenerateToken(authDataInJsonFormat.refreshToken);

        // TODO; 유효한 response 확인하기
        if (!res) {
          return;
        }
        EncryptedStorage.setItem(
          USER_STORAGE_KEY,
          JSON.stringify({
            accessToken: res.data.access_token,
            refreshToken: res.data.refresh_token,
          }),
        );
        applyToken(res.data.access_token);
      }
    } catch (e) {
      clearToken();
      setState({ ...state, isLogin: false, userId: '' });
      Toast.show({ type: 'error', text1: '토큰이 만료되어 로그아웃됩니다.' });
    }
  },
);

/** api 정의가 이뤄지는 곳입니다. */
const API = {
  postSignUp(body: IReqSignUp) {
    return client.post('/auth/signUp', body);
  },
  postSignIn(body: IReqSignIn) {
    return client.post('/auth/signIn', body);
  },
  getCheckId(params: IReqCheckId) {
    return client.get('/auth/check/username', { params });
  },
  getCheckNickname(params: IReqCheckNickname) {
    return client.get('/auth/check/nickname', { params });
  },
  postRegenerateToken(body: IReqPostRegenerateToken) {
    return client.post('/auth/regenerateToken', body);
  },
  getMemberProfile() {
    return client.get('/member/profile');
  },
  patchMemberProfile(body: IReqPatchMemberProfile) {
    return client.patch('/member', body);
  },
  deleteMember() {
    return client.delete('/member');
  },
};

export default API;
