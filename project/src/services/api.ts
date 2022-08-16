import { getToken } from './token';
import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const BASE_URL = 'https://10.react.pages.academy/six-cities';
const TIMEOUT_REQUEST = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT_REQUEST,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  return api;
};
