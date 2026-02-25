import React, { ReactNode, useEffect, useState } from 'react';

import { View, Text, Pressable, StyleSheet } from 'react-native';

import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

import { colors, IconButton } from '@/shared';

import { useStyles } from './styles';

export interface ICustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

export const CustomModal = ({
  isOpen,
  onClose,
  title,
  icon,
  children
}: ICustomModalProps) => {
  const s = useStyles();
  const [shouldRender, setShouldRender] = useState(isOpen);
  const scale = useSharedValue(0.9);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      scale.value = withTiming(1, { duration: 250 });
    } else {
      scale.value = withTiming(0.9, { duration: 200 }, finished => {
        if (finished) {
          runOnJS(setShouldRender)(false);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));

  if (!shouldRender) return null;

  return (
    <View style={s.overlay}>
      <Pressable
        style={[StyleSheet.absoluteFill, s.overlayTouch]}
        onPress={onClose}
      />
      <Animated.View style={[s.container, animatedContainerStyle]}>
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
        <View>{children}</View>
      </Animated.View>
    </View>
  );
};
