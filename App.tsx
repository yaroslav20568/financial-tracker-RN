import React from 'react';

import { StatusBar } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import { PortalProvider, PortalHost } from '@gorhom/portal';

import { AuthProvider, NavigationProvider, TanstackProvider } from '@/app';
import { portalHostName, toastConfig } from '@/shared';

import '@/shared/config/theme/unistyles';
import '@/entities/session/api/interceptors';

const App = () => {
  return (
    <GestureHandlerRootView>
      <PortalProvider>
        <SafeAreaProvider>
          <StatusBar barStyle="dark-content" />
          <TanstackProvider>
            <AuthProvider>
              <NavigationProvider />
            </AuthProvider>
            <PortalHost name={portalHostName} />
          </TanstackProvider>
        </SafeAreaProvider>
        <Toast config={toastConfig} />
      </PortalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
