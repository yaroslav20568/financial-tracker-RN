import React from 'react';

import { StackScreenProps } from '@react-navigation/stack';

import { Header, BenefitList, SecurityList } from './ui';

import { TAuthStackParamList } from '@/app';
import { Button, ScreenLayout } from '@/shared';

export type TProps = StackScreenProps<TAuthStackParamList, 'Onboarding'>;

export const OnboardingScreen = ({ navigation }: TProps) => {
  const navigateToAuth = () => {
    navigation.navigate('Auth');
  };

  return (
    <ScreenLayout isCenter>
      <Header />
      <BenefitList />
      <SecurityList />
      <Button title="Next" onPress={navigateToAuth} />
    </ScreenLayout>
  );
};
