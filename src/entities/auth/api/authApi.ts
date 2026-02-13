import { ITokens } from '@/entities';
import { TLoginForm } from '@/features/auth/login-form/model';
import { TRegisterForm } from '@/features/auth/register-form/model';
import { axiosInstance } from '@/shared';

class AuthApi {
  login = async (data: TLoginForm): Promise<ITokens> => {
    const response = await axiosInstance.post<ITokens>('/auth/login', data, {
      _skipAuth: true
    });

    return response.data;
  };

  register = async (data: TRegisterForm): Promise<ITokens> => {
    const response = await axiosInstance.post<ITokens>(
      '/auth/registration',
      data,
      {
        _skipAuth: true
      }
    );

    return response.data;
  };
}

export const authApi = new AuthApi();
