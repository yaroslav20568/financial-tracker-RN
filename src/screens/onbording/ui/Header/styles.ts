import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10
      },
      iconWrapper: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
        padding: 8,
        borderRadius: 8
      },
      title: {
        fontSize: 24,
        fontFamily: fonts.interBold,
        color: colors.black
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
