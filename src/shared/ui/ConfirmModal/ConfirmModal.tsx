import React from 'react';

import { Text } from 'react-native';

import {
  Button,
  ButtonGroupLayout,
  CustomModal,
  ICustomModalProps
} from '@/shared/ui';

import { useStyles } from './styles';

export interface IConfirmModalProps
  extends Omit<ICustomModalProps, 'icon' | 'children'> {
  text?: string;
  onPress: () => void;
  isDelete?: boolean;
  isLoading?: boolean;
}

export const ConfirmModal = ({
  visible,
  onClose,
  title,
  text = 'Are you sure you want to confirm your action?',
  onPress,
  isDelete = true,
  isLoading
}: IConfirmModalProps) => {
  const s = useStyles();

  return (
    <CustomModal visible={visible} onClose={onClose} title={title}>
      <Text style={s.text}>{text}</Text>
      <ButtonGroupLayout>
        <Button title="Cancel" onPress={onClose} size="m" variant="outline" />
        <Button
          title={!isDelete ? 'Confirm' : 'Delete'}
          onPress={onPress}
          size="m"
          disabled={isLoading}
          isLoading={isLoading}
        />
      </ButtonGroupLayout>
    </CustomModal>
  );
};
