import { useUnistyles } from 'react-native-unistyles';

export const useTheme = () => {
  const { theme } = useUnistyles();

  return { ...theme };
};
