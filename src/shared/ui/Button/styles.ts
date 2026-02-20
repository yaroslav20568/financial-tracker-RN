import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        borderWidth: 1,
        borderRadius: 8,
        variants: {
          size: {
            s: {
              paddingVertical: 3,
              paddingHorizontal: 7
            },
            m: {
              paddingVertical: 6,
              paddingHorizontal: 9
            },
            l: {
              paddingVertical: 9,
              paddingHorizontal: 19
            }
          },
          variant: {
            background: {
              backgroundColor: colors.blue,
              borderColor: 'transparent'
            },
            outline: {
              backgroundColor: 'transparent',
              borderColor: colors.blue
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
          variant: {
            background: {
              color: colors.white
            },
            outline: {
              color: colors.blue
            }
          }
        }
      }
    };
  });
};
