import React from 'react';

import { ActivityIndicator } from 'react-native';

import { useTheme } from '@/shared/lib';

export const Loader = () => {
  const { colors } = useTheme();

  return <ActivityIndicator size="large" color={colors.blue} />;
};
