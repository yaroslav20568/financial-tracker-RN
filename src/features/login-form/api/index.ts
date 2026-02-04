import Toast from 'react-native-toast-message';

import axios, { AxiosError } from 'axios';

import { TLoginForm } from '@/features/login-form/model';
import { axiosInstance, IErrorResponse } from '@/shared';

interface ILoginResponse {}

export const loginRequest = async (
  data: TLoginForm
): Promise<ILoginResponse> => {
  try {
    const response = await axiosInstance.post<ILoginResponse>(
      '/auth/login',
      data
    );

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
