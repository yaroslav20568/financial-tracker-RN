import React from 'react';

import { SourcesTable } from '@/entities';
import { CreateSourceForm } from '@/features';
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
  const [isOpen, openModal, closeModal] = useModal();

  return (
    <ScreenLayout isScrollable={false}>
      <HeadScreenLayout
        title="Source Management"
        text="Manage your transaction sources like bank accounts, cash, and credit cards"
        rightSlot={
          <Button
            title={'Add Source'}
            onPress={openModal}
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
      <CustomModal
        isOpen={isOpen}
        onClose={closeModal}
        title="Add Source"
        icon={<Icon family="ionicons" name="wallet" color={colors.blue} />}
      >
        <CreateSourceForm onSuccess={closeModal} onCancel={closeModal} />
      </CustomModal>
    </ScreenLayout>
  );
};
