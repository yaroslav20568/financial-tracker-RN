import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(() => ({
    container: {
      flex: 1
    },
    scrollContainer: (isCenter: boolean) => ({
      flexGrow: 1,
      justifyContent: isCenter ? 'center' : 'flex-start'
    })
  }));
};
