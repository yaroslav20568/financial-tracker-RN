import React, { ReactNode } from 'react';

import { View } from 'react-native';

import { useStyles } from './styles';

interface IProps {
  header?: ReactNode;
  content: ReactNode;
}

export const BorderLayout = ({ header, content }: IProps) => {
  const s = useStyles();

  return (
    <View>
      {header && <View style={s.header}>{header}</View>}
      <View style={s.content(!!header)}>{content}</View>
    </View>
  );
};
