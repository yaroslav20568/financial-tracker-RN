import React from 'react';

import { HeadScreenLayout, ScreenLayout, useRefreshOnFocus } from '@/shared';
import { AccountProfile } from '@/widgets';

export const AccountScreen = () => {
  useRefreshOnFocus();

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
