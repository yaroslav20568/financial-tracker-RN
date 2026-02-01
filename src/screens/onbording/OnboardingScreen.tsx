import React from 'react';

import { ScreenLayout } from '@shared/index';

import { Header, BenefitList, SecurityList } from './ui';

export const OnboardingScreen = () => {
  return (
    <ScreenLayout isCenter>
      <Header />
      <BenefitList />
      <SecurityList />
    </ScreenLayout>
  );
};
