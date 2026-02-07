import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      container: {
        alignItems: 'center'
      },
      title: {
        fontSize: 14,
        fontFamily: fonts.interMedium,
        color: colors.gray,
        marginTop: 8,
        marginBottom: 2
      },
      text: {
        fontSize: 13,
        fontFamily: fonts.interRegular,
        color: colors.gray
      }
    };
  });
};
