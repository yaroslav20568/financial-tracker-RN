import { ViewStyle } from 'react-native';

import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { colors } = theme;

    const generalStyle = {
      backgroundColor: colors.white,
      borderColor: colors.borderGray,
      borderWidth: 1,
      borderRadius: 10
    } satisfies ViewStyle;

    return {
      container: { flex: 1 },
      header: {
        ...generalStyle,
        borderBottomWidth: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      },
      content: (isHeader: boolean) => ({
        ...generalStyle,
        flex: 1,
        borderTopLeftRadius: isHeader ? 0 : 10,
        borderTopRightRadius: isHeader ? 0 : 10
      })
    };
  });
};
