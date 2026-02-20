import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(() => {
    return {
      container: {
        flexDirection: 'row',
        gap: 8
      }
    };
  });
};
