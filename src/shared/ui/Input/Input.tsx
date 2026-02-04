import React, { useState } from 'react';

import { View, Text, TextInput, TextInputProps } from 'react-native';

import { colors } from '@/shared';

import { useStyles } from './styles';

export interface IInputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input = ({ label, style, error, ...props }: IInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const s = useStyles();

  return (
    <View>
      {label && (
        <View style={s.labelWrapper}>
          <Text style={s.label}>{label}</Text>
          <Text style={s.required}>*</Text>
        </View>
      )}
      <TextInput
        style={[s.input(isFocused), style]}
        selectionColor={colors.black}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        {...props}
      />
      {error && <Text style={s.error}>{error}</Text>}
    </View>
  );
};
