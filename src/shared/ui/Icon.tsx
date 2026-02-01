import React from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { IconProps as VectorIconProps } from 'react-native-vector-icons/Icon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { colors } from '@/shared';

export const IconFamily = {
  entypo: Entypo,
  feather: Feather,
  materialIcons: MaterialIcons,
  fontAwesome6: FontAwesome6,
  fontisto: Fontisto
} as const;

export type TIconFamilyType = keyof typeof IconFamily;

interface IconProps extends VectorIconProps {
  family: TIconFamilyType;
}

export const Icon = ({
  family,
  name,
  size = 20,
  color = colors.black,
  ...props
}: IconProps) => {
  const IconComponent = IconFamily[family];

  return <IconComponent name={name} size={size} color={color} {...props} />;
};
