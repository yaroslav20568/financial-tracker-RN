import React from 'react';

import { View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { IAccount, useEditAccount } from '@/entities';
import {
  editAccountSchema,
  TEditAccountForm
} from '@/features/account/edit-account-form/model';
import { Button, FormInput } from '@/shared';

import { useStyles } from './styles';

interface IProps extends Partial<IAccount> {
  closeEditForm: () => void;
}

export const EditAccountForm = ({ name, closeEditForm }: IProps) => {
  const s = useStyles();
  const { mutateAsync: editAccountMutate, isPending } = useEditAccount();

  const editAccountDefaultValues: TEditAccountForm = {
    name: name || ''
  } as const;

  const { control, handleSubmit } = useForm<TEditAccountForm>({
    resolver: yupResolver(editAccountSchema),
    defaultValues: editAccountDefaultValues,
    mode: 'all'
  });

  const onSubmit = async (data: TEditAccountForm) => {
    await editAccountMutate(data);
    closeEditForm();
  };

  return (
    <View>
      <FormInput
        control={control}
        name="name"
        label="Account Name"
        placeholder="Enter Account Name"
      />
      <View style={s.btnsWrapper}>
        <Button
          title="Save Changes"
          onPress={handleSubmit(onSubmit)}
          style={s.btn}
          size="m"
          disabled={isPending}
          isLoading={isPending}
        />
        <Button
          title="Cancel"
          onPress={closeEditForm}
          style={s.btn}
          variant="outline"
          size="m"
        />
      </View>
    </View>
  );
};
