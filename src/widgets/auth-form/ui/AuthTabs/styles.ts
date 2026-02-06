import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      tabBar: {
        flexDirection: 'row',
        backgroundColor: colors.lightGray,
        borderRadius: 12,
        padding: 4,
        position: 'relative',
        height: 48,
        marginBottom: 20
      },
      tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
      },
      indicator: {
        position: 'absolute',
        top: 4,
        bottom: 4,
        width: '49%',
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
      },
      indicatorLeft: {
        left: 4
      },
      indicatorRight: {
        left: '50%'
      },
      tabText: {
        fontSize: 14,
        fontFamily: fonts.interSemiBold,
        color: colors.gray
      },
      activeText: {
        color: colors.black
      }
    };
  });
};
