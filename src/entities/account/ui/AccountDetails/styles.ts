import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(() => {
    const gap = 12;

    return {
      row: {
        flexDirection: 'row',
        gap: gap,
        marginBottom: gap
      },
      lastRow: {
        marginBottom: 0
      }
    };
  });
};
