import { createStackNavigator } from '@react-navigation/stack';

import { CategoriesScreen, SubcategoriesScreen } from '@/screens';

export type TCategoriesStackParamList = {
  CategoriesMain: undefined;
  Subcategories: { categoryId: string };
};

const CategoriesStack = createStackNavigator<TCategoriesStackParamList>();

export const CategoriesNavigatorStack = () => {
  return (
    <CategoriesStack.Navigator screenOptions={{ headerShown: false }}>
      <CategoriesStack.Screen
        name="CategoriesMain"
        component={CategoriesScreen}
      />
      <CategoriesStack.Group
        screenOptions={{
          presentation: 'transparentModal',
          gestureEnabled: false,
          cardStyle: { top: 10 }
        }}
      >
        <CategoriesStack.Screen
          name="Subcategories"
          component={SubcategoriesScreen}
        />
      </CategoriesStack.Group>
    </CategoriesStack.Navigator>
  );
};
