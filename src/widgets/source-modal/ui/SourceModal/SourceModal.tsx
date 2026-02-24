import React from 'react';

import { Text } from 'react-native-gesture-handler';

import { ISource } from '@/entities';
import { CreateSourceForm } from '@/features';
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
      {isEdit ? (
        // <UpdateSourceForm
        //   initialValues={source}
        //   onSuccess={onClose}
        //   onCancel={onClose}
        // />
        <Text>{source.name}</Text>
      ) : (
        <CreateSourceForm onSuccess={onClose} onCancel={onClose} />
      )}
    </CustomModal>
  );
};
