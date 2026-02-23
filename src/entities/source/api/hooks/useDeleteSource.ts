import Toast from 'react-native-toast-message';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { sourceApi } from '@/entities/source/api';
import { ISource } from '@/entities/source/model';

export const useDeleteSource = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['deleteSource'],
    mutationFn: (id: ISource['id']) => sourceApi.deleteSource(id),
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Source Delete Success',
        text2: 'Your changes have been saved'
      });

      queryClient.invalidateQueries({ queryKey: ['sources'] });
    },
    onError: error => {
      Toast.show({
        type: 'error',
        text1: 'Source Delete Error',
        text2: error.message
      });
    }
  });
};
