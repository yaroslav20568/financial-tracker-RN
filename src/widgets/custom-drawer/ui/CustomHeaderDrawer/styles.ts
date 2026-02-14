import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create((theme, rt) => {
    const { fonts, colors } = theme;

    return {
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: rt.insets.top + 10,
        paddingBottom: rt.insets.top - 15,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        elevation: 4,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
      },
      title: {
        fontSize: 22,
        fontFamily: fonts.interBold,
        color: colors.black
      },
      menuButton: {
        padding: 5
      }
    };
  });
};
