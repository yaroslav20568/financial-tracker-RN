import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts } = theme;

    return {
      container: {
        flex: 1
      },
      contentContainer: {
        paddingTop: 20,
        paddingBottom: 20
      },
      logoHeaderWhapper: {
        marginVertical: 10
      },
      logoutDrawerItem: {
        marginTop: 10
      },
      labelStyle: {
        fontSize: 14,
        lineHeight: 18,
        fontFamily: fonts.interMedium
      }
    };
  });
};
