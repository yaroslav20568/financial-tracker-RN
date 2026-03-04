import { useRoute, RouteProp } from '@react-navigation/native';

import { TRootParamList } from '@/app';

export const useTypedRoute = <K extends keyof TRootParamList>() =>
  useRoute<RouteProp<TRootParamList, K>>();
