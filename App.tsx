import React from 'react';

import { StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import { NavigationProvider } from '@/app';

import '@/shared/config/theme/unistyles';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationProvider />
      <Toast />
    </SafeAreaProvider>
  );
};

export default App;
