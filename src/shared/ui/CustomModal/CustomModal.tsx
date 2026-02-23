import React, { ReactNode } from 'react';

import { Modal, View, Text, Pressable } from 'react-native';

import { colors, IconButton } from '@/shared';

import { useStyles } from './styles';

interface IProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

export const CustomModal = ({
  visible,
  onClose,
  title,
  icon,
  children
}: IProps) => {
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
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
};
