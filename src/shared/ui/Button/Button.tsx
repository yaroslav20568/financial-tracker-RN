import React, { ReactNode } from 'react';

import { Text, Pressable, PressableProps } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';

import { TSize } from '@/shared/model';

import { useStyles } from './styles';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type TVariant = 'background' | 'outline';

interface IProps extends PressableProps {
  title: string;
  isLoading?: boolean;
  size?: TSize;
  variant?: TVariant;
  icon?: ReactNode;
}

export const Button = ({
  title,
  onPress,
  style,
  isLoading,
  size = 'l',
  variant = 'background',
  icon,
  ...props
}: IProps) => {
  const s = useStyles();
  s.useVariants({ size, variant });

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <AnimatedPressable
      {...props}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[s.button, style, animatedStyle]}
    >
      {!isLoading && icon}
      <Text style={s.text}>{!isLoading ? title : 'Loading...'}</Text>
    </AnimatedPressable>
  );
};
