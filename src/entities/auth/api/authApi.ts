import Toast from 'react-native-toast-message';

import axios, { AxiosError } from 'axios';

import { ITokens } from '@/entities';
import { TLoginForm } from '@/features/login-form/model';
import { TRegisterForm } from '@/features/register-form/model';
import { axiosInstance, IErrorResponse } from '@/shared';

class AuthApi {
  login = async (data: TLoginForm): Promise<ITokens> => {
    try {
      const response = await axiosInstance.post<ITokens>('/auth/login', data);

      Toast.show({
        type: 'success',
        text1: 'Login Success',
        text2: 'You are logged in'
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error as AxiosError<IErrorResponse>;

        Toast.show({
          type: 'error',
          text1: 'Login Error',
          text2: err?.response?.data?.message
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Unexpected error occurred'
        });
      }

      throw error;
    }
  };

  register = async (data: TRegisterForm): Promise<ITokens> => {
    try {
      const response = await axiosInstance.post<ITokens>(
        '/auth/registration',
        data
      );

      Toast.show({
        type: 'success',
        text1: 'Register Success',
        text2: 'You are registered'
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error as AxiosError<IErrorResponse>;

        Toast.show({
          type: 'error',
          text1: 'Register Error',
          text2: err?.response?.data?.errors?.join(', ')
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Unexpected error occurred'
        });
      }

      throw error;
    }
  };
}

export const authApi = new AuthApi();
