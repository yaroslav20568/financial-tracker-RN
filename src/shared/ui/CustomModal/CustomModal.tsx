import React, { ReactNode } from 'react';

import { Modal, View, Text, Pressable } from 'react-native';

import { Button, colors, IconButton } from '@/shared';

import { useStyles } from './styles';

export interface ICustomModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  title: string;
  icon?: ReactNode;
  children: React.ReactNode;
  cancelBtnText?: string;
  submitBtnText?: string;
  isLoading?: boolean;
}

export const CustomModal = ({
  visible,
  onClose,
  onSubmit,
  title,
  icon,
  children,
  cancelBtnText = 'Cancel',
  submitBtnText = 'Add',
  isLoading
}: ICustomModalProps) => {
  const s = useStyles();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={s.overlay} onPress={onClose}>
        <Pressable style={s.container} onPress={e => e.stopPropagation()}>
          <View style={s.header}>
            <View style={s.headerContent}>
              {icon}
              <Text style={s.title}>{title}</Text>
            </View>
            <IconButton
              onPress={onClose}
              family="ionicons"
              name="close"
              size={25}
              color={colors.gray}
            />
          </View>
          <View style={s.body}>{children}</View>
          {onSubmit && submitBtnText && (
            <View style={s.footer}>
              <Button
                title={cancelBtnText}
                onPress={onClose}
                size="m"
                variant="outline"
                disabled={isLoading}
                isLoading={isLoading}
              />
              <Button
                title={submitBtnText}
                onPress={onSubmit}
                size="m"
                disabled={isLoading}
                isLoading={isLoading}
              />
            </View>
          )}
        </Pressable>
      </Pressable>
    </Modal>
  );
};
