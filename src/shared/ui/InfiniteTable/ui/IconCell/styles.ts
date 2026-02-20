import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
      },
      title: {
        fontSize: 13,
        fontFamily: fonts.interRegular,
        color: colors.black
      }
    };
  });
};
