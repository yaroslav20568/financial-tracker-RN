import React, { ReactNode } from 'react';

import { ScrollView, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

interface IProps {
  children: ReactNode;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

export const ScreenLayout = ({
  children,
  paddingVertical = 15,
  paddingHorizontal = 20
}: IProps) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ paddingVertical, paddingHorizontal }}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
