import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppNavigationDrawer, AuthNavigationStack } from '@app/navigation';

export const NavigationProvider = () => {
  const [token, _] = useState(false);

  return (
    <NavigationContainer>
      {!token ? <AuthNavigationStack /> : <AppNavigationDrawer />}
    </NavigationContainer>
  );
};
