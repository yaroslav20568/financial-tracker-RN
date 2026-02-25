import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
            background: {},
            outline: { backgroundColor: 'transparent' }
          },
          color: {
            blue: {},
            red: {}
          }
        },
        compoundVariants: [
          {
            variant: 'background',
            color: 'blue',
            styles: { backgroundColor: colors.blue, borderColor: 'transparent' }
          },
          {
            variant: 'outline',
            color: 'blue',
            styles: { borderColor: colors.blue }
          },
          {
            variant: 'background',
            color: 'red',
            styles: { backgroundColor: colors.red, borderColor: 'transparent' }
          },
          {
            variant: 'outline',
            color: 'red',
            styles: { borderColor: colors.red }
          }
        ]
      },
      text: {
        fontFamily: fonts.interMedium,
        textAlign: 'center',
        variants: {
          size: {
            s: { fontSize: 14 },
            m: { fontSize: 15 },
            l: { fontSize: 16 }
          },
          variant: {
            background: { color: colors.white },
            outline: {}
          },
          color: {
            blue: {},
            red: {}
          }
        },
        compoundVariants: [
          {
            variant: 'outline',
            color: 'blue',
            styles: { color: colors.blue }
          },
          {
            variant: 'outline',
            color: 'red',
            styles: { color: colors.red }
          }
        ]
      }
    };
  });
};
