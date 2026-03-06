import Toast from 'react-native-toast-message';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { accountApi } from '@/entities/account/api';
import { MUTATION_KEYS, QUERY_KEYS } from '@/shared';

export const useEditAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [MUTATION_KEYS.ACCOUNT.EDIT],
    mutationFn: accountApi.editAccount,
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Account Update Success',
        text2: 'Your changes have been saved'
      });

      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ACCOUNT] });
    },
    onError: error => {
      Toast.show({
        type: 'error',
        text1: 'Account Update Error',
        text2: error.message
      });
    }
  });
};
