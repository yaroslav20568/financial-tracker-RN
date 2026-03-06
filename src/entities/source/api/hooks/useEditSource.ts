import Toast from 'react-native-toast-message';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { sourceApi } from '@/entities/source/api';
import { TSourceForm } from '@/features/source/manage-source-form/model';
import { MUTATION_KEYS, QUERY_KEYS } from '@/shared';

export const useEditSource = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [MUTATION_KEYS.SOURCE],
    mutationFn: ({ id, data }: { id: string; data: TSourceForm }) =>
      sourceApi.editSource(id, data),
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Source Edit Success',
        text2: 'Your changes have been saved'
      });

      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SOURCES] });
    },
    onError: error => {
      Toast.show({
        type: 'error',
        text1: 'Source Edit Error',
        text2: error.message
      });
    }
  });
};
