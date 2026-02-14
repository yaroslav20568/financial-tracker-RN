import Toast from 'react-native-toast-message';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { accountApi } from '@/entities/account/api';
import { TEditAccountForm } from '@/features/account/edit-account-form/model';

export const useEditAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['editAccount'],
    mutationFn: (data: TEditAccountForm) => accountApi.editAccount(data),
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Account Update Success',
        text2: 'Your changes have been saved'
      });

      queryClient.invalidateQueries({ queryKey: ['account'] });
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
