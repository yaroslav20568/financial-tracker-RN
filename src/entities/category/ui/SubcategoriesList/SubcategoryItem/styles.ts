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
      textsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
      },
      iconWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
      },
      title: {
        width: 90,
        fontSize: 14,
        fontFamily: fonts.interMedium,
        color: colors.black
      },
      text: {
        fontSize: 13,
        fontFamily: fonts.interRegular,
        color: colors.black
      }
    };
  });
};
