import React from 'react';

import { HeadScreenLayout, ScreenLayout } from '@/shared';

export const SourcesScreen = () => {
  return (
    <ScreenLayout>
      <HeadScreenLayout
        title="Source Management"
        text="Manage your transaction sources like bank accounts, cash, and credit cards"
      />
    </ScreenLayout>
  );
};
