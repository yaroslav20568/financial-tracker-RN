import React from 'react';

import { StackScreenProps } from '@react-navigation/stack';

import { TCategoriesStackParamList } from '@/app';
import { SubcategoriesHeader, SubcategoriesList } from '@/entities';
import { BorderLayout, StackModalLayout } from '@/shared';

interface IProps
  extends StackScreenProps<TCategoriesStackParamList, 'Subcategories'> {}

export const SubcategoriesScreen = ({ route }: IProps) => {
  const { categoryId, categoryName } = route.params;

  return (
    <StackModalLayout isScrollable={false} isBottomSpace>
      <BorderLayout
        header={
          <SubcategoriesHeader categoryName={categoryName} onPress={() => {}} />
        }
      >
        <SubcategoriesList
          categoryId={categoryId}
          categoryName={categoryName}
        />
      </BorderLayout>
    </StackModalLayout>
  );
};
