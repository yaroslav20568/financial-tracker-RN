import Toast from 'react-native-toast-message';

import { TRegisterForm } from '@/features/register-form/model';
import { axiosInstance } from '@/shared';

interface IRegisterResponse {
  accessToken: string;
  refreshToken: string;
}

export const registerRequest = async (
  data: TRegisterForm
): Promise<IRegisterResponse> => {
  try {
    const response = await axiosInstance.post<IRegisterResponse>(
      '/auth/registration',
      data
    );

    Toast.show({
      type: 'success',
      text1: 'Register Success',
      text2: 'You are logged in'
    });

    return response.data;
  } catch (error: any) {
    Toast.show({
      type: 'error',
      text1: 'Register Error',
      text2: error?.response?.data?.errors?.join(', ')
    });

    throw error;
  }
};
