import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 100
      },
      overlayTouch: {
        ...StyleSheet.absoluteFillObject
      },
      container: {
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 20,
        shadowColor: colors.black
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
      },
      headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14
      },
      title: {
        fontSize: 16,
        fontFamily: fonts.interBold,
        color: colors.black
      }
    };
  });
};
