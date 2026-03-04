import { TAppDrawerParamList } from './AppNavigationDrawer';
import { TAuthStackParamList } from './AppNavigationStack';
import { TCategoriesStackParamList } from './stacks';

export type TRootParamList = TAuthStackParamList &
  TAppDrawerParamList &
  TCategoriesStackParamList;
