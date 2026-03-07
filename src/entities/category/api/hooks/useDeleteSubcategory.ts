import Toast from 'react-native-toast-message';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { categoryApi } from '@/entities/category/api';
import { MUTATION_KEYS, QUERY_KEYS } from '@/shared';

export const useDeleteSubcategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [MUTATION_KEYS.SUBCATEGORY.DELETE],
    mutationFn: categoryApi.deleteSubcategory,
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Subcategory Delete Success',
        text2: 'Your changes have been saved'
      });

      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SUBCATEGORIES] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CATEGORIES] });
    },
    onError: error => {
      Toast.show({
        type: 'error',
        text1: 'Subcategory Delete Error',
        text2: error.message
      });
    }
  });
};
