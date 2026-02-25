import React from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { IconProps as VectorIconProps } from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import { useTheme } from '@/shared/lib';

export const IconFamily = {
  entypo: Entypo,
  feather: Feather,
  materialIcons: MaterialIcons,
  fontAwesome6: FontAwesome6,
  fontisto: Fontisto,
  octicons: Octicons,
  ionicons: Ionicons
} as const;

type TIconFamilyType = keyof typeof IconFamily;

export interface IIconProps extends VectorIconProps {
  family: TIconFamilyType;
}

export const Icon = ({
  family,
  name,
  size = 20,
  color,
  ...props
}: IIconProps) => {
  const { colors } = useTheme();
  const IconComponent = IconFamily[family];
  const iconColor = color || colors.black;

  return <IconComponent name={name} size={size} color={iconColor} {...props} />;
};
