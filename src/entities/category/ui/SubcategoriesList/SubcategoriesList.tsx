import React, { useCallback } from 'react';

import { FlatList, ListRenderItem } from 'react-native';

import { useGetSubcategories } from '@/entities/category/api';
import { ICategory, ISubcategory } from '@/entities/category/model';
import { CenterLayout, EmptyData, ErrorData, Loader } from '@/shared';

import { useStyles } from './styles';
import { SubcategoryItem } from './SubcategoryItem';

interface IProps {
  categoryId: ICategory['id'];
  categoryName: ICategory['name'];
}

export const SubcategoriesList = ({ categoryId, categoryName }: IProps) => {
  const s = useStyles();
  const { data, isLoading, isError, error } = useGetSubcategories(categoryId);
  const subcategories = data?.content;

  const renderItem: ListRenderItem<Omit<ISubcategory, 'transaction_count'>> =
    useCallback(({ item }) => <SubcategoryItem {...item} />, []);

  const keyExtractor = useCallback(
    (item: Omit<ISubcategory, 'transaction_count'>) => item.id,
    []
  );

  if (isLoading) {
    return (
      <CenterLayout>
        <Loader />
      </CenterLayout>
    );
  }

  if (isError) {
    return <ErrorData title={error.message} />;
  }

  if (!subcategories?.length && !isError) {
    return (
      <EmptyData
        title={`Category ${categoryName} has no subcategories`}
        text="No data available. Please create a new record to see it here."
      />
    );
  }

  return (
    <FlatList
      data={subcategories}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={s.container}
      ListEmptyComponent={
        <EmptyData
          title={`Category ${categoryName} has no subcategories`}
          text="No data available. Please create a new record to see it here."
        />
      }
      style={s.container}
    />
  );
};
