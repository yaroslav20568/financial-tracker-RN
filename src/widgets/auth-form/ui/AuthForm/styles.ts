import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { colors } = theme;

    return {
      formWrapper: {
        backgroundColor: colors.white,
        borderRadius: 8,
        paddingVertical: 24,
        paddingHorizontal: 16
      }
    };
  });
};
