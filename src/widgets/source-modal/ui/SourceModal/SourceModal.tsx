import React from 'react';

import { ISource } from '@/entities';
import { SourceForm } from '@/features';
import { CustomModal, ICustomModalProps, Icon, colors } from '@/shared';

interface IProps extends Pick<ICustomModalProps, 'isOpen' | 'onClose'> {
  source: ISource | null;
}

export const SourceModal = ({ isOpen, onClose, source }: IProps) => {
  const isEdit = !!source;

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title={isEdit ? 'Edit Source' : 'Add Source'}
      icon={<Icon family="ionicons" name="wallet" color={colors.blue} />}
    >
      <SourceForm source={source} onSuccess={onClose} onCancel={onClose} />
    </CustomModal>
  );
};
