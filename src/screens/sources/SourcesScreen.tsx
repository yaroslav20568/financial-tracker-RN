import React, { useState } from 'react';

import { ISource, SourcesFilters, SourcesTable } from '@/entities';
import { SourceForm } from '@/features';
import {
  Button,
  CustomModal,
  HeadScreenLayout,
  Icon,
  ScreenLayout,
  colors,
  useModal
} from '@/shared';

export const SourcesScreen = () => {
  const [selectedSource, setSelectedSource] = useState<ISource | null>(null);
  // const [filters, setFilters] = useState({
  //   sortBy: 'name',
  //   sortDirection: 'ASC'
  // });
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
      <SourcesFilters />
      <SourcesTable onEdit={handleEdit} />
      <CustomModal
        isOpen={isOpen}
        onClose={closeModal}
        title={selectedSource ? 'Edit Source' : 'Add Source'}
        icon={<Icon family="ionicons" name="wallet" color={colors.blue} />}
      >
        <SourceForm
          source={selectedSource}
          onSuccess={closeModal}
          onCancel={closeModal}
        />
      </CustomModal>
    </ScreenLayout>
  );
};
