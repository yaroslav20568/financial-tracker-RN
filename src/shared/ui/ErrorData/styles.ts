import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      container: {
        backgroundColor: colors.white,
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.red
      },
      title: {
        fontSize: 14,
        fontFamily: fonts.interMedium,
        color: colors.red,
        textAlign: 'center',
        marginTop: 5
      }
    };
  });
};
