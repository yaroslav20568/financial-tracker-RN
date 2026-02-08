import { ITokens } from '@/entities';
import { TLoginForm } from '@/features/login-form/model';
import { TRegisterForm } from '@/features/register-form/model';
import { axiosInstance } from '@/shared';

class AuthApi {
  login = async (data: TLoginForm): Promise<ITokens> => {
    const response = await axiosInstance.post<ITokens>('/auth/login', data);

    return response.data;
  };

  register = async (data: TRegisterForm): Promise<ITokens> => {
    const response = await axiosInstance.post<ITokens>(
      '/auth/registration',
      data
    );

    return response.data;
  };
}

export const authApi = new AuthApi();
