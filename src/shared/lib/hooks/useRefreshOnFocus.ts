import { useCallback } from 'react';

import { useFocusEffect } from '@react-navigation/native';

import { queryClient } from '@/app';

export const useRefreshOnFocus = (queryKey: Array<string>) => {
  useFocusEffect(
    useCallback(() => {
      queryClient.invalidateQueries({
        queryKey,
        type: 'active',
        stale: true
      });
    }, [queryKey])
  );
};
