import React, { ReactNode } from 'react';

import { View } from 'react-native';

import {
  GestureHandlerRootView,
  ScrollView,
  GestureDetector,
  Gesture
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';

import { useNavigation } from '@react-navigation/native';

import { useStyles } from './styles';

interface IProps {
  children: ReactNode;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

export const StackModalLayout = ({
  children,
  paddingVertical = 15,
  paddingHorizontal = 20
}: IProps) => {
  const s = useStyles();
  const navigation = useNavigation();

  const translateY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate(event => {
      translateY.value = Math.max(0, event.translationY);
    })
    .onEnd(event => {
      if (event.translationY > 150) {
        translateY.value = withSpring(1000, { damping: 50 });
        runOnJS(navigation.goBack)();
      } else {
        translateY.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }]
  }));

  return (
    <GestureHandlerRootView>
      <Animated.View style={[s.container, animatedStyle]}>
        <GestureDetector gesture={panGesture}>
          <View style={s.gestureZone}>
            <View style={s.handle} />
          </View>
        </GestureDetector>
        <ScrollView
          contentContainerStyle={{
            paddingTop: paddingVertical,
            paddingBottom: paddingVertical + 10,
            paddingHorizontal
          }}
        >
          {children}
        </ScrollView>
      </Animated.View>
    </GestureHandlerRootView>
  );
};
