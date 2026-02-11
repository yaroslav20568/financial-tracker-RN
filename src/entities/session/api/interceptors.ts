import { AxiosError, AxiosResponse } from 'axios';

import { sessionUtils } from '@/entities/session/lib/utils';
import { axiosInstance, TFailedRequestPromise } from '@/shared';

import { sessionApi } from './sessionApi';

let isRefreshing: boolean = false;
let failedQueue: Array<TFailedRequestPromise> = [];

const processQueue = (
  error: AxiosError | null,
  token: string | null = null
) => {
  failedQueue.forEach((prom: TFailedRequestPromise) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token as string);
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.request.use(
  async config => {
    const { accessToken } = await sessionUtils.getTokens();

    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        try {
          const token = await new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject, config: originalRequest });
          });

          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${token}`;
          }

          return await axiosInstance(originalRequest);
        } catch (err) {
          await sessionUtils.clearTokens();

          return Promise.reject(err);
        }
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          await sessionApi.refreshTokenRequest();

        await sessionUtils.saveTokens({
          accessToken: newAccessToken,
          refreshToken: newRefreshToken
        });

        axiosInstance.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        processQueue(null, newAccessToken);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        }

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        await sessionUtils.clearTokens();

        processQueue(refreshError as AxiosError, null);

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
