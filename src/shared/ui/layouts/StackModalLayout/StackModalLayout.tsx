import React, { ReactNode } from 'react';

import { ScrollView, View } from 'react-native';

import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
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
  const scrollDirection = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate(event => {
      translateY.value = Math.max(0, event.translationY);
      scrollDirection.value = -1;
    })
    .onEnd(event => {
      scrollDirection.value = withSpring(0);

      if (event.translationY > 150) {
        translateY.value = withSpring(1000, { damping: 50 });
        runOnJS(navigation.goBack)();
      } else {
        translateY.value = withSpring(0);
      }
    });

  const animatedContainerStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }]
  }));

  const leftHandleStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${interpolate(
          scrollDirection.value,
          [-1, 0, 1],
          [10, 0, -10]
        )}deg`
      }
    ],
    transformOrigin: 'right'
  }));

  const rightHandleStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${interpolate(
          scrollDirection.value,
          [-1, 0, 1],
          [-10, 0, 10]
        )}deg`
      }
    ],
    transformOrigin: 'left'
  }));

  return (
    <Animated.View style={[s.container, animatedContainerStyle]}>
      <GestureDetector gesture={panGesture}>
        <View style={s.gestureZone}>
          <View style={s.handleWrapper}>
            <Animated.View style={[s.handle, leftHandleStyle]} />
            <Animated.View style={[s.handle, rightHandleStyle]} />
          </View>
        </View>
      </GestureDetector>
      <ScrollView
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingTop: paddingVertical,
          paddingBottom: paddingVertical + 10,
          paddingHorizontal
        }}
      >
        {children}
      </ScrollView>
    </Animated.View>
  );
};
