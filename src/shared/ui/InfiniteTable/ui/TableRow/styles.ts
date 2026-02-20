import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        paddingVertical: 10
      },
      cell: {
        fontSize: 13,
        fontFamily: fonts.interRegular,
        color: colors.gray,
        textAlign: 'center'
      }
    };
  });
};
