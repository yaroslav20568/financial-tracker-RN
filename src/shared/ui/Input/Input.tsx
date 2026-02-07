import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity
} from 'react-native';

import { colors, Icon } from '@/shared';

import { useStyles } from './styles';

export interface IInputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input = ({
  label,
  style,
  error,
  secureTextEntry,
  ...props
}: IInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isPassword = secureTextEntry ? secureTextEntry : false;
  const s = useStyles();

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <View>
      {label && (
        <View style={s.labelWrapper}>
          <Text style={s.label}>{label}</Text>
          <Text style={s.required}>*</Text>
        </View>
      )}
      <View>
        <TextInput
          style={[s.input(isFocused, isPassword), style]}
          selectionColor={colors.gray}
          secureTextEntry={secureTextEntry && !isShowPassword}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity
            style={s.showPasswordBtn}
            onPress={toggleShowPassword}
            activeOpacity={0.5}
          >
            <Icon
              family="feather"
              name={!isShowPassword ? 'eye' : 'eye-off'}
              color={colors.gray}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={s.error}>{error}</Text>}
    </View>
  );
};
