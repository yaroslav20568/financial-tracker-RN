import React from 'react';

import { HeadScreenLayout, ScreenLayout } from '@/shared';

export const MyTransactionsScreen = () => {
  return (
    <ScreenLayout>
      <HeadScreenLayout
        title="Transaction Management"
        text="Track and manage your financial transactions"
      />
    </ScreenLayout>
  );
};
