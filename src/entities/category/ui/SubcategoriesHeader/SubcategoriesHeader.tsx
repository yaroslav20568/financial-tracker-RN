import React from 'react';

import { Text, View } from 'react-native';

import { ICategory } from '@/entities/category/model';
import { Button, Icon, useTheme } from '@/shared';

import { useStyles } from './styles';

interface IProps {
  categoryName: ICategory['name'];
  onPress: () => void;
}

export const SubcategoriesHeader = ({ categoryName, onPress }: IProps) => {
  const s = useStyles();
  const { colors } = useTheme();

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
