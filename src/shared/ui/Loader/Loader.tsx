import React from 'react';

import { ActivityIndicator } from 'react-native';

import { colors } from '@/shared/config';

export const Loader = () => {
  return <ActivityIndicator size="large" color={colors.blue} />;
};
