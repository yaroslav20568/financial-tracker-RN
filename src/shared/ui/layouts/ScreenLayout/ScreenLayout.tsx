import React, { ReactNode } from 'react';

import { ScrollView, View } from 'react-native';

import { Edges, SafeAreaView } from 'react-native-safe-area-context';

import { useHeaderHeight } from '@react-navigation/elements';

import { TPadding } from '@/shared/model';

import { useStyles } from './styles';

export interface IScreenLayoutProps {
  children: ReactNode;
  padding?: TPadding;
  isCenter?: boolean;
  isScrollable?: boolean;
  isBottomSpace?: boolean;
}

export const ScreenLayout = ({
  children,
  padding = [15, 20],
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
      paddingVertical: padding[0],
      paddingHorizontal: padding[1],
      paddingBottom: padding[0] + bottomSpace
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
