import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { colors } = theme;

    return {
      row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        paddingVertical: 10
      },
      cell: { flex: 1, textAlign: 'center' }
    };
  });
};
