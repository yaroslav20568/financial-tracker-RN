import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      button: {
        borderRadius: 8,
        variants: {
          size: {
            s: {
              paddingVertical: 3,
              paddingHorizontal: 7
            },
            m: {
              paddingVertical: 5,
              paddingHorizontal: 10
            },
            l: {
              paddingVertical: 10,
              paddingHorizontal: 20
            }
          },
          color: {
            default: {
              backgroundColor: colors.blue
            }
          }
        }
      },
      text: {
        fontFamily: fonts.interMedium,
        textAlign: 'center',
        variants: {
          size: {
            s: {
              fontSize: 14
            },
            m: {
              fontSize: 15
            },
            l: {
              fontSize: 16
            }
          },
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
