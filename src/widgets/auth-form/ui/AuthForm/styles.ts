import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { colors } = theme;

    return {
      content: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 16
      }
    };
  });
};
