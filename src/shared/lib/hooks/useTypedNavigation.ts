import { useNavigation, NavigationProp } from '@react-navigation/native';

import { TRootParamList } from '@/app';

export const useTypedNavigation = () =>
  useNavigation<NavigationProp<TRootParamList>>();
