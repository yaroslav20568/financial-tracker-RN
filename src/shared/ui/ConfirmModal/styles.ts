import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      text: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: fonts.interMedium,
        color: colors.gray
      }
    };
  });
};
