import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      list: {
        marginBottom: 15,
        gap: 10
      },
      benefit: {
        flexDirection: 'row',
        gap: 8
      },
      iconWrapper: {
        marginTop: 5
      },
      textContent: {
        flex: 1
      },
      title: {
        fontSize: 16,
        fontFamily: fonts.interSemiBold,
        color: colors.black,
        marginBottom: 2
      },
      text: {
        fontSize: 14,
        fontFamily: fonts.interRegular,
        color: colors.gray
      }
    };
  });
};
