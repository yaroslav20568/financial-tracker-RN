import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      labelWrapper: {
        flexDirection: 'row',
        gap: 4,
        marginBottom: 5
      },
      label: {
        fontSize: 14,
        fontFamily: fonts.interSemiBold,
        color: colors.black
      },
      required: {
        color: colors.red
      },
      input: (isFocused: boolean) => ({
        backgroundColor: '#fafafa',
        borderWidth: 1,
        borderColor: isFocused ? colors.blue : '#e2e8f0',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 14,
        fontFamily: fonts.interRegular,
        color: colors.black
      }),
      error: {
        fontSize: 12,
        fontFamily: fonts.interMedium,
        color: colors.red,
        marginTop: 5
      }
    };
  });
};
