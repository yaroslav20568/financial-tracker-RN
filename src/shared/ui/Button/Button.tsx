import React from 'react';

import { Text, Pressable, PressableProps } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';

import { useStyles } from './styles';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface IProps extends PressableProps {
  title: string;
}

export const Button = ({ title, onPress, ...props }: IProps) => {
  const s = useStyles();
  s.useVariants({});

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
      style={[s.button, animatedStyle]}
    >
      <Text style={s.text}>{title}</Text>
    </AnimatedPressable>
  );
};
