import React, { useState } from 'react';

import { View, Text, TextInput, TextInputProps } from 'react-native';

import { colors } from '@/shared';

import { useStyles } from './styles';

interface IProps extends TextInputProps {
  label?: string;
}

export const Input = ({ label = 'Login', style, ...props }: IProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const s = useStyles();

  return (
    <View>
      <View style={s.labelWrapper}>
        <Text style={s.label}>{label}</Text>
        <Text style={s.required}>*</Text>
      </View>
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
    </View>
  );
};
