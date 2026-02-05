import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(() => {
    return {
      container: {
        flex: 1
      },
      contentContainer: {
        paddingTop: 20,
        paddingBottom: 20
      },
      logoHeaderWhapper: {
        marginVertical: 10
      }
    };
  });
};
