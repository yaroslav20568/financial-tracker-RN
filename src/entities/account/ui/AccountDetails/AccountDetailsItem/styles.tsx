import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15
      },
      iconWrapper: {
        marginTop: 3
      },
      texts: { flex: 1 },
      title: {
        fontSize: 14,
        fontFamily: fonts.interMedium,
        color: colors.gray
      },
      subtitle: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: fonts.interRegular,
        color: colors.black
      }
    };
  });
};
