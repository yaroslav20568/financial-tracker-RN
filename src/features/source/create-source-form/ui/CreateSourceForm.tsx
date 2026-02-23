import React from 'react';

import { View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useCreateSource } from '@/entities';
import {
  createSourceFormSchema,
  TCreateSourceForm
} from '@/features/source/create-source-form/model';
import { Button, ButtonGroupLayout, FormInput } from '@/shared';

import { useStyles } from './styles';

interface IProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const createSourceDefaultValues: TCreateSourceForm = {
  name: ''
} as const;

export const CreateSourceForm = ({ onSuccess, onCancel }: IProps) => {
  const s = useStyles();
  const { mutateAsync: createSourceMutate, isPending } = useCreateSource();

  const { control, handleSubmit } = useForm<TCreateSourceForm>({
    resolver: yupResolver(createSourceFormSchema),
    defaultValues: createSourceDefaultValues,
    mode: 'all'
  });

  const onSubmit = async (data: TCreateSourceForm) => {
    await createSourceMutate(data);
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
      <ButtonGroupLayout style={s.btnsWrapper}>
        <Button
          title="Cancel"
          onPress={onCancel}
          size="m"
          variant="outline"
          disabled={isPending}
          isLoading={isPending}
        />
        <Button
          title="Add Source"
          onPress={handleSubmit(onSubmit)}
          size="m"
          disabled={isPending}
          isLoading={isPending}
        />
      </ButtonGroupLayout>
    </View>
  );
};
