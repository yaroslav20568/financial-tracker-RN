import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationProvider } from '@app/index';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationProvider />
    </SafeAreaProvider>
  );
};

export default App;
