import React from 'react';

import { StackScreenProps } from '@react-navigation/stack';

import { TAuthStackParamList } from '@/app';
import { Button, ScreenLayout, storageService } from '@/shared';

import { Header, BenefitList, SecurityList } from './ui';

export type TProps = StackScreenProps<TAuthStackParamList, 'Onboarding'>;

export const OnboardingScreen = ({ navigation }: TProps) => {
  const navigateToAuth = () => {
    navigation.navigate('Auth');

    storageService.set<boolean>('isCompletedOnbording', true);
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
