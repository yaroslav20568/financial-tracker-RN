import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(() => {
    return {
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    };
  });
};
