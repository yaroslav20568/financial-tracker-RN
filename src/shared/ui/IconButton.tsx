import React from 'react';

import { TouchableOpacity, ViewStyle } from 'react-native';

import { Icon, IIconProps } from '@/shared/ui';

interface IProps extends IIconProps {
  onPress: () => void;
  activeOpacity?: number;
  style?: ViewStyle;
}

export const IconButton = ({
  onPress,
  style,
  activeOpacity = 0.5,
  ...props
}: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={style}
    >
      <Icon {...props} />
    </TouchableOpacity>
  );
};
