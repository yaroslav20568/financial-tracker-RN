import React from 'react';

import { HeadScreenLayout, ScreenLayout } from '@/shared';

export const AccountScreen = () => {
  return (
    <ScreenLayout>
      <HeadScreenLayout
        title="Account Settings"
        text="Manage your account information and preferences"
      />
    </ScreenLayout>
  );
};
