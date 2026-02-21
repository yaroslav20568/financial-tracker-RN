import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { colors } = theme;

    return {
      container: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 10,
        overflow: 'hidden'
      },
      scrollContainer: {
        flexGrow: 1
      },
      tableMinWidth: {
        minWidth: '100%'
      },
      loaderWrapper: {
        position: 'absolute',
        left: '50%',
        bottom: 20
      }
    };
  });
};
