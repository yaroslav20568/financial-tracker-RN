import React, { useState } from 'react';

import { View } from 'react-native';

import Animated, { FadeInDown } from 'react-native-reanimated';

import { LoginForm, RegisterForm } from '@/features';
import { AuthTabs } from '@/widgets/auth-form/ui/AuthTabs';

import { useStyles } from './styles';

export const AuthForm = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const s = useStyles();

  return (
    <View>
      <AuthTabs activeTab={activeTab} onSelect={setActiveTab} />
      <Animated.View key={activeTab} entering={FadeInDown} style={s.content}>
        {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
      </Animated.View>
    </View>
  );
};
