import Toast from 'react-native-toast-message';

import { TLoginForm } from '@/features/login-form/model';
import { axiosInstance } from '@/shared';

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
  } catch (error: any) {
    Toast.show({
      type: 'error',
      text1: 'Login Error',
      text2: error?.response?.data?.message
    });

    throw error;
  }
};
