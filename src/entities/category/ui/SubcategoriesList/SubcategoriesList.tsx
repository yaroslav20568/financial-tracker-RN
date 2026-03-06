import React, { useCallback } from 'react';

import { FlatList, ListRenderItem } from 'react-native';

import { useGetSubcategories } from '@/entities/category/api';
import { ISubcategory } from '@/entities/category/model';
import {
  CenterLayout,
  EmptyData,
  ErrorData,
  Loader,
  useTypedRoute
} from '@/shared';

import { useStyles } from './styles';
import { SubcategoryItem } from './SubcategoryItem';

export const SubcategoriesList = () => {
  const s = useStyles();
  const { params } = useTypedRoute<'Subcategories'>();
  const { categoryId, categoryName } = params;
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
