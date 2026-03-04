import React from 'react';

import { SubcategoriesHeader, SubcategoriesList } from '@/entities';
import { BorderLayout, StackModalLayout } from '@/shared';

export const SubcategoriesScreen = () => {
  return (
    <StackModalLayout isScrollable={false} isBottomSpace>
      <BorderLayout header={<SubcategoriesHeader onPress={() => {}} />}>
        <SubcategoriesList />
      </BorderLayout>
    </StackModalLayout>
  );
};
