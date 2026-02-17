import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(theme => {
    const { fonts, colors } = theme;

    return {
      container: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 10,
        overflow: 'hidden'
      },
      tableMinWidth: {
        minWidth: '100%'
      },
      header: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray
      },
      thead: {
        flex: 1,
        fontSize: 16,
        fontFamily: fonts.interMedium,
        color: colors.black,
        textAlign: 'center'
      },
      row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        paddingVertical: 10
      },
      cell: { textAlign: 'center', flex: 1 },
      loaderWrapper: {
        position: 'absolute',
        left: '50%',
        bottom: 20
      }
    };
  });
};
