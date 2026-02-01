import { StyleSheet } from 'react-native-unistyles';

import { lightTheme } from './theme';

const appThemes = {
  light: lightTheme
};

type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  settings: {
    initialTheme: 'light'
  },
  themes: appThemes
});
