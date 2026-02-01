import React from 'react';

import { StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationProvider } from '@app/index';

import '@shared/config/theme/unistyles';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationProvider />
    </SafeAreaProvider>
  );
};

export default App;
