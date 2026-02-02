import React from 'react';

import { ScreenLayout } from '@/shared';
import { AuthForm } from '@/widgets';

export const AuthScreen = () => {
  return (
    <ScreenLayout isCenter>
      <AuthForm />
    </ScreenLayout>
  );
};
