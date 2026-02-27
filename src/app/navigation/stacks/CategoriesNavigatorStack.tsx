import { createStackNavigator } from '@react-navigation/stack';

import { CategoriesScreen, SubcategoriesScreen } from '@/screens';

export type TCategoriesStackParamList = {
  Categories: undefined;
  Category: { categoryId: string };
};

const CategoriesStack = createStackNavigator<TCategoriesStackParamList>();

export const CategoriesNavigatorStack = () => {
  return (
    <CategoriesStack.Navigator screenOptions={{ headerShown: false }}>
      <CategoriesStack.Screen name="Categories" component={CategoriesScreen} />
      <CategoriesStack.Group
        screenOptions={{
          presentation: 'transparentModal',
          gestureEnabled: false,
          cardStyle: { top: 10 }
        }}
      >
        <CategoriesStack.Screen
          name="Category"
          component={SubcategoriesScreen}
        />
      </CategoriesStack.Group>
    </CategoriesStack.Navigator>
  );
};
