import Toast from 'react-native-toast-message';

import axios, { AxiosError } from 'axios';

import { ITokens } from '@/entities';
import { TRegisterForm } from '@/features/register-form/model';
import { axiosInstance, IErrorResponse } from '@/shared';

export const registerRequest = async (
  data: TRegisterForm
): Promise<ITokens> => {
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
