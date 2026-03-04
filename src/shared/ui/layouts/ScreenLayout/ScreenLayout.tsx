import React, { ReactNode } from 'react';

import { ScrollView, View } from 'react-native';

import { Edges, SafeAreaView } from 'react-native-safe-area-context';

import { useHeaderHeight } from '@react-navigation/elements';

import { useStyles } from './styles';

export interface IScreenLayoutProps {
  children: ReactNode;
  paddingVertical?: number;
  paddingHorizontal?: number;
  isCenter?: boolean;
  isScrollable?: boolean;
  isBottomSpace?: boolean;
}

export const ScreenLayout = ({
  children,
  paddingVertical = 15,
  paddingHorizontal = 20,
  isScrollable = true,
  isCenter = false,
  isBottomSpace = false
}: IScreenLayoutProps) => {
  const s = useStyles();
  const headerHeight = useHeaderHeight();
  const bottomSpace = isBottomSpace ? 10 : 0;

  const edges: Edges =
    headerHeight > 0
      ? ['bottom', 'left', 'right']
      : ['top', 'bottom', 'left', 'right'];

  const containerStyle = [
    s.scrollContainer(isCenter),
    {
      paddingVertical,
      paddingHorizontal,
      paddingBottom: paddingVertical + bottomSpace
    }
  ];

  return (
    <SafeAreaView style={s.container} edges={edges}>
      {isScrollable ? (
        <ScrollView contentContainerStyle={containerStyle}>
          {children}
        </ScrollView>
      ) : (
        <View style={containerStyle}>{children}</View>
      )}
    </SafeAreaView>
  );
};
