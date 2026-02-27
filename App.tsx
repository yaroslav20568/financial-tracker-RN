import React from 'react';

import { StatusBar } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import { AuthProvider, NavigationProvider, TanstackProvider } from '@/app';
import { toastConfig } from '@/shared';

import '@/shared/config/theme/unistyles';
import '@/entities/session/api/interceptors';

const App = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <TanstackProvider>
          <AuthProvider>
            <NavigationProvider />
          </AuthProvider>
        </TanstackProvider>
        <Toast config={toastConfig} />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
