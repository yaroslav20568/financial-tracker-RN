import React from 'react';

import { View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useAuth, authApi } from '@/entities';
import { registerSchema, TRegisterForm } from '@/features/register-form/model';
import { Button, FormInput } from '@/shared';

import { useStyles } from './styles';

const registerDefaultValues: TRegisterForm = {
  login: '',
  accountName: '',
  password: '',
  checkPassword: ''
} as const;

export const RegisterForm = () => {
  const s = useStyles();
  const { setToken } = useAuth();

  const { control, handleSubmit } = useForm<TRegisterForm>({
    resolver: yupResolver(registerSchema),
    defaultValues: registerDefaultValues,
    mode: 'all'
  });

  const onSubmit = async (data: TRegisterForm) => {
    const tokens = await authApi.register(data);

    if (tokens.accessToken && tokens.refreshToken) {
      await setToken(tokens);
    }
  };

  return (
    <View>
      <View style={s.fields}>
        <FormInput
          control={control}
          name="login"
          label="Login"
          placeholder="Enter login"
        />
        <FormInput
          control={control}
          name="accountName"
          label="Account Name"
          placeholder="Enter Account Name"
        />
        <FormInput
          control={control}
          name="password"
          label="Password"
          placeholder="Enter password"
          secureTextEntry
        />
        <FormInput
          control={control}
          name="checkPassword"
          label="Check Password"
          placeholder="Re-enter password"
          secureTextEntry
        />
      </View>
      <Button
        title="Register"
        onPress={handleSubmit(onSubmit)}
        style={s.button}
      />
    </View>
  );
};
