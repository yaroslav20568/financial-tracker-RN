import React from 'react';

import { StackScreenProps } from '@react-navigation/stack';

import { TAuthStackParamList } from '@/app';
import { Button, ScreenLayout, storageService } from '@/shared';

import { Header, BenefitList, SecurityList } from './ui';

interface IProps extends StackScreenProps<TAuthStackParamList, 'Onboarding'> {}

export const OnboardingScreen = ({ navigation }: IProps) => {
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
