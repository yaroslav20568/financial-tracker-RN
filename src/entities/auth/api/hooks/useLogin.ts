import Toast from 'react-native-toast-message';

import { useMutation } from '@tanstack/react-query';

import { authApi } from '@/entities/auth/api';
import { useAuth } from '@/entities/session';

export const useLogin = () => {
  const { setToken } = useAuth();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: async tokens => {
      if (tokens.accessToken && tokens.refreshToken) {
        await setToken(tokens);
      }
    },
    onError: error => {
      Toast.show({
        type: 'error',
        text1: 'Login Error',
        text2: error.message
      });
    }
  });
};
