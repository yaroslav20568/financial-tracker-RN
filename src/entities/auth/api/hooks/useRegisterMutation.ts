import Toast from 'react-native-toast-message';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { authApi } from '@/entities/auth/api';
import { useAuth } from '@/entities/session';
import { IErrorResponse } from '@/shared';

export const useRegisterMutation = () => {
  const { setToken } = useAuth();

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: async tokens => {
      if (tokens.accessToken && tokens.refreshToken) {
        await setToken(tokens);
      }

      Toast.show({
        type: 'success',
        text1: 'Register Success',
        text2: 'You are registered'
      });
    },
    onError: (error: AxiosError<IErrorResponse>) => {
      Toast.show({
        type: 'error',
        text1: 'Register Error',
        text2: error.response?.data?.errors?.join(', ') || 'Unexpected error'
      });
    }
  });
};
