import React from 'react';

import { StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import { AuthProvider, NavigationProvider, TanstackProvider } from '@/app';

import '@/shared/config/theme/unistyles';
import '@/entities/session/api/interceptors';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <TanstackProvider>
        <AuthProvider>
          <NavigationProvider />
        </AuthProvider>
      </TanstackProvider>
      <Toast />
    </SafeAreaProvider>
  );
};

export default App;
