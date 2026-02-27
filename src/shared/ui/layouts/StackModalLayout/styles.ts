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
        height: 40,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
      },
      handleWrapper: {
        flexDirection: 'row'
      },
      handle: {
        width: 20,
        height: 4,
        backgroundColor: colors.gray,
        borderRadius: 2
      }
    };
  });
};
