import { API_URL } from '@env';
import axios from 'axios';

import { storageService } from '@/shared';
import { ITokens } from '@entities/session/model';

class SessionApi {
  refreshTokenRequest = async (): Promise<ITokens> => {
    const refreshToken = await storageService.get('refreshToken');

    if (!refreshToken) {
      throw new Error('Refresh token not available, logout');
    }

    const response = await axios.post<ITokens>(`${API_URL}/auth/refresh`, {
      refreshToken
    });

    return response.data;
  };
}

export const sessionApi = new SessionApi();
