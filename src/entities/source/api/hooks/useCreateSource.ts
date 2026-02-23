import Toast from 'react-native-toast-message';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { sourceApi } from '@/entities/source/api';
import { TCreateSourceForm } from '@/features/source/create-source-form/model';

export const useCreateSource = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['createSource'],
    mutationFn: (data: TCreateSourceForm) => sourceApi.createSource(data),
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Source Create Success',
        text2: 'Your changes have been saved'
      });

      queryClient.invalidateQueries({ queryKey: ['sources'] });
    },
    onError: error => {
      Toast.show({
        type: 'error',
        text1: 'Source Create Error',
        text2: error.message
      });
    }
  });
};
