import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      header: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray
      },
      thead: {
        flex: 1,
        fontSize: 16,
        fontFamily: fonts.interMedium,
        color: colors.black,
        textAlign: 'center'
      }
    };
  });
};
