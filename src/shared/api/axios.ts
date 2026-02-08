import { API_URL } from '@env';
import axios, { AxiosRequestConfig } from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    _retry?: boolean;
  }
}

export type TFailedRequestPromise = {
  resolve: (value: string | PromiseLike<string>) => void;
  reject: (reason?: any) => void;
  config: AxiosRequestConfig;
};

export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});
