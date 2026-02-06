import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 15
      },
      texts: { flex: 1 },
      name: {
        fontSize: 16,
        fontFamily: fonts.interSemiBold,
        color: colors.black
      },
      id: {
        fontSize: 14,
        fontFamily: fonts.interRegular,
        color: colors.gray
      }
    };
  });
};
