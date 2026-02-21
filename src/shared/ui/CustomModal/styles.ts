import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
      },
      container: {
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 20,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
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
      },
      body: {
        marginBottom: 20
      },
      footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 12
      }
    };
  });
};
