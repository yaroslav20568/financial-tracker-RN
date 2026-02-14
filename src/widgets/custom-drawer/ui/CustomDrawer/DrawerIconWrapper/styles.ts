import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(() => {
    return {
      container: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
      }
    };
  });
};
