import React from 'react';

import { View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { ISource, useCreateSource, useEditSource } from '@/entities';
import {
  sourceFormSchema,
  TSourceForm
} from '@/features/source/manage-source-form/model';
import { Button, ButtonGroupLayout, FormInput, FormUtils } from '@/shared';

interface IProps {
  source?: ISource | null;
  onSuccess: () => void;
  onCancel: () => void;
}

export const SourceForm = ({ source, onSuccess, onCancel }: IProps) => {
  const { mutateAsync: createSourceMutate, isPending: isCreatePending } =
    useCreateSource();
  const { mutateAsync: editSourceMutate, isPending: isEditPending } =
    useEditSource();
  const isEdit = !!source;
  const isPending = isCreatePending || isEditPending;

  const createSourceDefaultValues: TSourceForm =
    FormUtils.getDefaultsValues(source);

  const { control, handleSubmit } = useForm<TSourceForm>({
    resolver: yupResolver(sourceFormSchema),
    defaultValues: createSourceDefaultValues,
    mode: 'all'
  });

  const onSubmit = async (data: TSourceForm) => {
    if (isEdit) {
      await editSourceMutate({ id: source.id, data });
    } else {
      await createSourceMutate(data);
    }

    onSuccess();
  };

  return (
    <View>
      <FormInput
        control={control}
        name="name"
        label="Source Name"
        placeholder="e.g., Cash, Bank Account, Credit Card"
      />
      <ButtonGroupLayout>
        <Button title="Cancel" onPress={onCancel} size="m" variant="outline" />
        <Button
          title={`${isEdit ? 'Edit' : 'Add'} Source`}
          onPress={handleSubmit(onSubmit)}
          size="m"
          disabled={isPending}
          isLoading={isPending}
        />
      </ButtonGroupLayout>
    </View>
  );
};
