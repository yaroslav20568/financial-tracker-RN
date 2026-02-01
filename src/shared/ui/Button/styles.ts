import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      button: {
        borderRadius: 8,
        variants: {
          color: {
            default: {
              backgroundColor: colors.blue
            }
          }
        }
      },
      text: {
        fontSize: 16,
        fontFamily: fonts.interMedium,
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        variants: {
          color: {
            default: {
              color: colors.white
            }
          }
        }
      }
    };
  });
};
