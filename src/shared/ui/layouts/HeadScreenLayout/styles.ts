import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 30,
        marginBottom: 16
      },
      texts: {
        flex: 1
      },
      title: {
        fontSize: 20,
        fontFamily: fonts.interBold,
        color: colors.black,
        marginBottom: 8
      },
      text: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: fonts.interRegular,
        color: colors.gray
      }
    };
  });
};
