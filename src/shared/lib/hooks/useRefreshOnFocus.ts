import { useCallback } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import { focusManager } from '@tanstack/react-query';

export const useRefreshOnFocus = () => {
  useFocusEffect(
    useCallback(() => {
      focusManager.setFocused(true);

      return () => focusManager.setFocused(false);
    }, [])
  );
};
