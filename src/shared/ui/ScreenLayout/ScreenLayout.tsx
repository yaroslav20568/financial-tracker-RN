import React, { ReactElement } from 'react';

import { ScrollView, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useStyles } from './styles';

interface IProps {
  children: ReactElement;
  paddingVertical?: number;
  paddingHorizontal?: number;
  isCenter?: boolean;
}

export const ScreenLayout = ({
  children,
  paddingVertical = 15,
  paddingHorizontal = 20,
  isCenter = false
}: IProps) => {
  const s = useStyles();

  return (
    <SafeAreaView style={s.container}>
      <ScrollView contentContainerStyle={s.scrollContainer(isCenter)}>
        <View style={{ paddingVertical, paddingHorizontal }}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
