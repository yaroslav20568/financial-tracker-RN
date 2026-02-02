import React, { useState } from 'react';

import { View } from 'react-native';

import Animated, { FadeInDown } from 'react-native-reanimated';

import { LoginForm, RegisterForm } from '@/features';

import { AuthTabs } from './AuthTabs';

export const AuthForm = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <View>
      <AuthTabs activeTab={activeTab} onSelect={setActiveTab} />

      <Animated.View key={activeTab} entering={FadeInDown}>
        {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
      </Animated.View>
    </View>
  );
};
