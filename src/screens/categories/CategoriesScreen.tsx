import React from 'react';

import { HeadScreenLayout, ScreenLayout } from '@/shared';

export const CategoriesScreen = () => {
  return (
    <ScreenLayout>
      <HeadScreenLayout
        title="Category Management"
        text="Organize your transactions with categories and subcategories"
      />
    </ScreenLayout>
  );
};
