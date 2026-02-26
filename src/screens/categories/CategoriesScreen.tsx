import React, { useState } from 'react';

import { CategoriesTable, ICategory } from '@/entities';
import { CategoryForm } from '@/features/category/manage-category-form';
import {
  Button,
  CustomModal,
  HeadScreenLayout,
  Icon,
  ScreenLayout,
  useTheme,
  useModal
} from '@/shared';

export const CategoriesScreen = () => {
  const { colors } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null
  );
  const [isOpen, openModal, closeModal] = useModal();

  const handleCreate = () => {
    setSelectedCategory(null);
    openModal();
  };

  const handleEdit = (category: ICategory) => {
    setSelectedCategory(category);
    openModal();
  };

  return (
    <ScreenLayout>
      <HeadScreenLayout
        title="Category Management"
        text="Organize your transactions with categories and subcategories"
        rightSlot={
          <Button
            title={'Add Category'}
            onPress={handleCreate}
            size="m"
            icon={
              <Icon
                family="entypo"
                name="plus"
                size={15}
                color={colors.white}
              />
            }
          />
        }
      />
      <CategoriesTable onEdit={handleEdit} />
      <CustomModal
        isOpen={isOpen}
        onClose={closeModal}
        title={`${selectedCategory ? 'Edit' : 'Add'} Category`}
        icon={
          <Icon family="fontAwesome6" name="layer-group" color={colors.blue} />
        }
      >
        <CategoryForm
          category={selectedCategory}
          onSuccess={closeModal}
          onCancel={closeModal}
        />
      </CustomModal>
    </ScreenLayout>
  );
};
