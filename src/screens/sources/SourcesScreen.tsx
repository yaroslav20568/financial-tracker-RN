import React, { useState } from 'react';

import { ISource, SourcesTable } from '@/entities';
import {
  Button,
  HeadScreenLayout,
  Icon,
  ScreenLayout,
  colors,
  useModal
} from '@/shared';
import { SourceModal } from '@/widgets';

export const SourcesScreen = () => {
  const [selectedSource, setSelectedSource] = useState<ISource | null>(null);
  const [isOpen, openModal, closeModal] = useModal();

  const handleCreate = () => {
    setSelectedSource(null);
    openModal();
  };

  const handleEdit = (source: ISource) => {
    setSelectedSource(source);
    openModal();
  };

  return (
    <ScreenLayout isScrollable={false}>
      <HeadScreenLayout
        title="Source Management"
        text="Manage your transaction sources like bank accounts, cash, and credit cards"
        rightSlot={
          <Button
            title={'Add Source'}
            onPress={handleCreate}
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
      <SourcesTable onEdit={handleEdit} />
      <SourceModal
        isOpen={isOpen}
        onClose={closeModal}
        source={selectedSource}
      />
    </ScreenLayout>
  );
};
