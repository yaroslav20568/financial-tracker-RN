import React from 'react';

import { View, Text, Pressable } from 'react-native';

import Animated, { LinearTransition } from 'react-native-reanimated';

import { useStyles } from './styles';

type TTab = 'login' | 'register';

interface IProps {
  activeTab: TTab;
  onSelect: (tab: TTab) => void;
}

export const AuthTabs = ({ activeTab, onSelect }: IProps) => {
  const s = useStyles();

  return (
    <View style={s.tabBar}>
      <Animated.View
        layout={LinearTransition.springify().damping(80)}
        style={[
          s.indicator,
          activeTab === 'register' ? s.indicatorRight : s.indicatorLeft
        ]}
      />
      <Pressable style={s.tab} onPress={() => onSelect('login')}>
        <Text style={[s.tabText, activeTab === 'login' && s.activeText]}>
          Вход
        </Text>
      </Pressable>
      <Pressable style={s.tab} onPress={() => onSelect('register')}>
        <Text style={[s.tabText, activeTab === 'register' && s.activeText]}>
          Регистрация
        </Text>
      </Pressable>
    </View>
  );
};
