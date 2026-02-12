import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(() => {
    return {
      fields: {
        gap: 20
      },
      button: {
        marginTop: 25
      }
    };
  });
};
