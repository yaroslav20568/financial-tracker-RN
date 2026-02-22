import React from 'react';

import { SourcesTable } from '@/entities';
import { Button, HeadScreenLayout, Icon, ScreenLayout, colors } from '@/shared';

export const SourcesScreen = () => {
  return (
    <ScreenLayout isScrollable={false}>
      <HeadScreenLayout
        title="Source Management"
        text="Manage your transaction sources like bank accounts, cash, and credit cards"
        rightSlot={
          <Button
            title={'Add Source'}
            onPress={null}
            size="m"
            icon={
              <Icon
                family="entypo"
                name="plus"
                size={15}
                color={colors.white}
              />
            }
          />
        }
      />
      <SourcesTable />
    </ScreenLayout>
  );
};
