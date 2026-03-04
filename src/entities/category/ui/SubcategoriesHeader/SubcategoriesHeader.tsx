import React from 'react';

import { Text, View } from 'react-native';

import { Button, Icon, useTheme, useTypedRoute } from '@/shared';

import { useStyles } from './styles';

interface IProps {
  onPress: () => void;
}

export const SubcategoriesHeader = ({ onPress }: IProps) => {
  const s = useStyles();
  const { colors } = useTheme();
  const { params } = useTypedRoute<'Subcategories'>();
  const { categoryName } = params;

  return (
    <View style={s.container}>
      <View style={s.iconWrapper}>
        <Icon family="fontAwesome6" name="layer-group" color={colors.blue} />
        <Text style={s.title}>{categoryName} - Subcategories</Text>
      </View>
      <Button
        title={'Add Subcategory'}
        onPress={onPress}
        size="s"
        variant="outline"
        icon={
          <Icon family="entypo" name="plus" size={15} color={colors.blue} />
        }
      />
    </View>
  );
};
