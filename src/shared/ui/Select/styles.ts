import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      dropdown: (isFocus: boolean) => ({
        flex: 1,
        backgroundColor: colors.white,
        height: 40,
        borderColor: isFocus ? colors.gray : colors.borderGray,
        borderWidth: 0.5,
        borderRadius: 10,
        paddingHorizontal: 16
      }),
      placeholderStyle: {
        fontSize: 14,
        fontFamily: fonts.interRegular,
        color: colors.black
      },
      selectedTextStyle: {
        fontSize: 14,
        fontFamily: fonts.interRegular,
        color: colors.black
      },
      listContainer: {
        borderColor: colors.gray,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 0,
        marginTop: 2,
        marginBottom: 40
      },
      itemTextStyle: {
        fontSize: 14,
        lineHeight: 14,
        fontFamily: fonts.interRegular,
        color: colors.black
      }
    };
  });
};
