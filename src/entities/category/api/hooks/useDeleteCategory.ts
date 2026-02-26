import Toast from 'react-native-toast-message';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { categoryApi } from '@/entities/category/api';

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['deleteCategory'],
    mutationFn: categoryApi.deleteCategory,
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Category Delete Success',
        text2: 'Your changes have been saved'
      });

      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
    onError: error => {
      Toast.show({
        type: 'error',
        text1: 'Category Delete Error',
        text2: error.message
      });
    }
  });
};
