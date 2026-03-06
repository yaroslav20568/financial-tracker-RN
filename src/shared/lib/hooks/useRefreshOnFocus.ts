import { useCallback } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import { QueryKey, useQueryClient } from '@tanstack/react-query';

export const useRefreshOnFocus = (queryKey: QueryKey) => {
  const queryClient = useQueryClient();

  useFocusEffect(
    useCallback(() => {
      queryClient.invalidateQueries({
        queryKey,
        type: 'active',
        stale: true
      });
    }, [queryClient, queryKey])
  );
};
