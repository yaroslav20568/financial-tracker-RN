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
        fontSize: 16,
        fontFamily: fonts.interSemiBold,
        color: colors.black
      },
      subtitle: {
        fontSize: 14,
        fontFamily: fonts.interRegular,
        color: colors.gray
      }
    };
  });
};
