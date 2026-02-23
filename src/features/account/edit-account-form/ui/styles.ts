import { StyleSheet } from 'react-native-unistyles';

export const useStyles = () => {
  return StyleSheet.create(() => {
    return {
      btnsWrapper: {
        marginTop: 15
      },
      btn: {
        flex: 1,
        width: '50%'
      }
    };
  });
};
