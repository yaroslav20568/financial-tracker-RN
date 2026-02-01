import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      list: {
        flexDirection: 'row',
        paddingBottom: 25,
        gap: 10
      },
      benefit: {
        flex: 1,
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
        fontSize: 14,
        fontFamily: fonts.interMedium,
        color: colors.black,
        marginBottom: 2
      },
      text: {
        fontSize: 12,
        fontFamily: fonts.interRegular,
        color: colors.gray
      }
    };
  });
};
