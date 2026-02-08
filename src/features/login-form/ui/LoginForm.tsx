import React from 'react';

import { View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useAuth, authApi } from '@/entities';
import { loginSchema, TLoginForm } from '@/features/login-form/model';
import { Button, FormInput } from '@/shared';

import { useStyles } from './styles';

const loginDefaultValues: TLoginForm = {
  login: '',
  password: ''
} as const;

export const LoginForm = () => {
  const s = useStyles();
  const { setToken } = useAuth();

  const { control, handleSubmit } = useForm<TLoginForm>({
    resolver: yupResolver(loginSchema),
    defaultValues: loginDefaultValues,
    mode: 'all'
  });

  const onSubmit = async (data: TLoginForm) => {
    const tokens = await authApi.login(data);

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
          placeholder="Enter your login"
        />
        <FormInput
          control={control}
          name="password"
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>
      <Button title="Login" onPress={handleSubmit(onSubmit)} style={s.button} />
    </View>
  );
};
