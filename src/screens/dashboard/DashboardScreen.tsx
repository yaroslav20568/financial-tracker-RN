import React from 'react';

import { HeadScreenLayout, ScreenLayout } from '@/shared';

export const DashboardScreen = () => {
  return (
    <ScreenLayout>
      <HeadScreenLayout
        title="Financial Dashboard"
        text="Overview of your financial activities"
      />
    </ScreenLayout>
  );
};
