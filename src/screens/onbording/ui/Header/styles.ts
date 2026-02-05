import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      header: {
        marginBottom: 20
      },
      text: {
        fontSize: 30,
        fontFamily: fonts.interBold,
        color: colors.black,
        marginBottom: 10
      },
      description: {
        fontSize: 16,
        lineHeight: 20,
        fontFamily: fonts.interRegular,
        color: colors.gray
      }
    };
  });
};
