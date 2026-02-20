import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { colors } = theme;

    return {
      container: {
        backgroundColor: colors.white,
        borderRadius: 10,
        overflow: 'hidden'
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
