import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { colors } = theme;

    return {
      container: {
        flex: 1,
        backgroundColor: colors.lightGray,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
      },
      gestureZone: {
        height: 50,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
      },
      handle: {
        width: 40,
        height: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 3
      }
    };
  });
};
