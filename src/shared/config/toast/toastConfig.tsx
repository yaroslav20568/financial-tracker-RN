import { ViewStyle } from 'react-native';

import { BaseToast, ErrorToast, ToastConfig } from 'react-native-toast-message';

import { colors } from '@/shared/config';

const generalStyles: ViewStyle = {
  height: 'auto',
  minHeight: 60,
  paddingVertical: 10
} as const;

export const toastConfig: ToastConfig = {
  error: props => (
    <ErrorToast
      {...props}
      text1NumberOfLines={1}
      text2NumberOfLines={0}
      style={{
        ...generalStyles,
        borderLeftColor: colors.red
      }}
    />
  ),
  success: props => (
    <BaseToast
      {...props}
      text1NumberOfLines={1}
      text2NumberOfLines={0}
      style={{
        ...generalStyles,
        borderLeftColor: colors.green
      }}
    />
  )
};
