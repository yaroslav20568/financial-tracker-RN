import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10
      },
      iconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
        borderRadius: 8,
        variants: {
          size: {
            s: { width: 32, height: 32, padding: 4 },
            l: { width: 48, height: 48, padding: 8 }
          }
        }
      },
      title: {
        fontFamily: fonts.interBold,
        color: colors.black,
        variants: {
          size: {
            s: { fontSize: 18 },
            l: { fontSize: 24 }
          }
        }
      }
    };
  });
};
