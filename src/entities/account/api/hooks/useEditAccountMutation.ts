import Toast from 'react-native-toast-message';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { accountApi } from '@/entities/account/api';
import { TEditAccountForm } from '@/features/account/edit-account-form/model';
import { IErrorResponse } from '@/shared';

export const useEditAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['editAccount'],
    mutationFn: (data: TEditAccountForm) => accountApi.editAccount(data),
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Account Updated',
        text2: 'Your changes have been successfully saved'
      });

      queryClient.invalidateQueries({ queryKey: ['account'] });
    },
    onError: (error: AxiosError<IErrorResponse>) => {
      Toast.show({
        type: 'error',
        text1: 'Account Update Failed',
        text2: error.response?.data?.errors?.join(', ') || 'Unexpected error'
      });
    }
  });
};
