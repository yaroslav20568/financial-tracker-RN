import { API_URL } from '@env';

import { axiosInstance, storageService } from '@/shared';
import { ITokens } from '@entities/session/model';

class SessionApi {
  refreshToken = async (): Promise<ITokens> => {
    const refreshToken = await storageService.get('refreshToken');

    if (!refreshToken) {
      throw new Error('Refresh token not available, logout');
    }

    const response = await axiosInstance.post<ITokens>(
      `${API_URL}/auth/refresh`,
      {
        refreshToken
      },
      { _skipAuth: true }
    );

    return response.data;
  };
}

export const sessionApi = new SessionApi();
