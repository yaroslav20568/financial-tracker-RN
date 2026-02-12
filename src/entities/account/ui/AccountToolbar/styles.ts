import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
      },
      title: {
        fontSize: 16,
        fontFamily: fonts.interSemiBold,
        color: colors.black
      }
    };
  });
};
