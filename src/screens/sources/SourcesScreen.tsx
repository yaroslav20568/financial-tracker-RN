import React from 'react';

import { HeadScreenLayout, ScreenLayout } from '@/shared';
import { Table } from '@/shared/ui/Table/Table';

export const SourcesScreen = () => {
  return (
    <ScreenLayout isScrollable={false}>
      <HeadScreenLayout
        title="Source Management"
        text="Manage your transaction sources like bank accounts, cash, and credit cards"
      />
      <Table />
    </ScreenLayout>
  );
};
