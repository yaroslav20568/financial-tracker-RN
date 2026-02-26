import React, { useMemo } from 'react';

import { View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { ICategory, useCreateCategory, useEditCategory } from '@/entities';
import {
  categoryFormSchema,
  TCategoryForm
} from '@/features/category/manage-category-form/model';
import { Button, ButtonGroupLayout, FormInput, FormUtils } from '@/shared';

interface IProps {
  category?: ICategory | null;
  onSuccess: () => void;
  onCancel: () => void;
}

export const CategoryForm = ({ category, onSuccess, onCancel }: IProps) => {
  const { mutateAsync: createCategoryMutate, isPending: isCreatePending } =
    useCreateCategory();
  const { mutateAsync: editCategoryMutate, isPending: isEditPending } =
    useEditCategory();
  const isEdit = !!category;
  const isPending = isCreatePending || isEditPending;

  const createCategoryDefaultValues: TCategoryForm = useMemo(
    () => FormUtils.getDefaultsValues(category),
    [category]
  );

  const { control, handleSubmit } = useForm<TCategoryForm>({
    resolver: yupResolver(categoryFormSchema),
    defaultValues: createCategoryDefaultValues,
    mode: 'all'
  });

  const onSubmit = async (data: TCategoryForm) => {
    if (isEdit) {
      await editCategoryMutate({ id: category.id, data });
    } else {
      await createCategoryMutate(data);
    }

    onSuccess();
  };

  return (
    <View>
      <FormInput
        control={control}
        name="name"
        label="Category Name"
        placeholder="Enter Category Name"
      />
      <ButtonGroupLayout>
        <Button title="Cancel" onPress={onCancel} size="m" variant="outline" />
        <Button
          title={`${isEdit ? 'Edit' : 'Add'} Category`}
          onPress={handleSubmit(onSubmit)}
          size="m"
          disabled={isPending}
          isLoading={isPending}
        />
      </ButtonGroupLayout>
    </View>
  );
};
