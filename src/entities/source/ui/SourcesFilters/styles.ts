import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { colors } = theme;

    return {
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginBottom: 15
      },
      iconButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderColor: colors.borderGray,
        borderWidth: 1,
        borderRadius: 10
      }
    };
  });
};
