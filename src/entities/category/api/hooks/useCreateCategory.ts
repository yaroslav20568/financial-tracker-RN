import Toast from 'react-native-toast-message';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { categoryApi } from '@/entities/category/api';

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['createCategory'],
    mutationFn: categoryApi.createCategory,
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Category Create Success',
        text2: 'Your changes have been saved'
      });

      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
    onError: error => {
      Toast.show({
        type: 'error',
        text1: 'Category Create Error',
        text2: error.message
      });
    }
  });
};
