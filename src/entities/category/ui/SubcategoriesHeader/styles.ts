import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20
      },
      iconWrapper: { flex: 1, flexDirection: 'row', alignItems: 'center' },
      title: {
        fontSize: 16,
        fontFamily: fonts.interSemiBold,
        color: colors.black,
        marginLeft: 8
      }
    };
  });
};
