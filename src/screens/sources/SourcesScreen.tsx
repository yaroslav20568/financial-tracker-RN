import React, { useDeferredValue, useState } from 'react';

import { ISource, SourcesFilters, SourcesTable } from '@/entities';
import { SourceForm } from '@/features';
import {
  Button,
  CustomModal,
  HeadScreenLayout,
  IParamsRequest,
  Icon,
  ScreenLayout,
  useTheme,
  useModal
} from '@/shared';

export const SourcesScreen = () => {
  const { colors } = useTheme();
  const [selectedSource, setSelectedSource] = useState<ISource | null>(null);
  const [filters, setFilters] = useState<
    Pick<IParamsRequest, 'sortBy' | 'sortDirection'>
  >({
    sortBy: 'name',
    sortDirection: 'ASC'
  });
  const deferredFilters = useDeferredValue(filters);
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
      <SourcesFilters filters={filters} onChange={setFilters} />
      <SourcesTable filters={deferredFilters} onEdit={handleEdit} />
      <CustomModal
        isOpen={isOpen}
        onClose={closeModal}
        title={`${selectedSource ? 'Edit' : 'Add'} Source`}
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
