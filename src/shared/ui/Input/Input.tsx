import React from 'react';

import { View, Text, TextInputProps } from 'react-native';

interface IProps extends TextInputProps {
  label?: string;
}

export const Input = ({ label = 'Login' }: IProps) => {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
};
