import React from 'react';

import { HeadScreenLayout, ScreenLayout } from '@/shared';
import { AccountProfile } from '@/widgets';

export const AccountScreen = () => {
  return (
    <ScreenLayout>
      <HeadScreenLayout
        title="Account Settings"
        text="Manage your account information and preferences"
      />
      <AccountProfile />
    </ScreenLayout>
  );
};
