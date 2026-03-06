import Toast from 'react-native-toast-message';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { categoryApi } from '@/entities/category/api';
import { TCategoryForm } from '@/features/category/manage-category-form/model';
import { MUTATION_KEYS, QUERY_KEYS } from '@/shared';

export const useEditCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [MUTATION_KEYS.CATEGORY.EDIT],
    mutationFn: ({ id, data }: { id: string; data: TCategoryForm }) =>
      categoryApi.editCategory(id, data),
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Category Edit Success',
        text2: 'Your changes have been saved'
      });

      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CATEGORIES] });
    },
    onError: error => {
      Toast.show({
        type: 'error',
        text1: 'Category Edit Error',
        text2: error.message
      });
    }
  });
};
