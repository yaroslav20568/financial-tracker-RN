import React, { useCallback, useMemo, useState } from 'react';

import { Text } from 'react-native';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import { TCategoriesStackParamList } from '@/app';
import { categoryApi, useDeleteCategory } from '@/entities/category/api';
import { ICategory } from '@/entities/category/model';
import {
  DateUtils,
  ITableAction,
  ITableColumn,
  Icon,
  IconCell,
  InfiniteTable,
  TableActions,
  useConfirmModal,
  useTheme
} from '@/shared';
import { useStyles } from '@/shared/ui/InfiniteTable/ui/TableRow/styles';

const queryKey = ['categories'];

interface IProps {
  onEdit: (category: ICategory) => void;
}

export const CategoriesTable = ({ onEdit }: IProps) => {
  const tableRowS = useStyles();
  const { colors } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null
  );
  const { mutateAsync: deleteCategoryMutate, isPending } = useDeleteCategory();
  const navigation =
    useNavigation<DrawerNavigationProp<TCategoriesStackParamList>>();

  const [confirmModal, openConfirmModal] = useConfirmModal({
    title: 'Delete Category',
    text: `You want to delete a category with the name: ${selectedCategory?.name}?`,
    onPress: async () => {
      if (selectedCategory) {
        await deleteCategoryMutate(selectedCategory.id);
      }
    },
    submitBtnColor: 'red',
    isLoading: isPending
  });

  const getRowActions = (category: ICategory): Array<ITableAction> => [
    {
      iconProps: { family: 'feather', name: 'edit' },
      onPress: () => onEdit(category)
    },
    {
      iconProps: {
        family: 'materialIcons',
        name: 'delete-outline',
        color: colors.red
      },
      onPress: () => {
        setSelectedCategory(category);
        openConfirmModal();
      }
    }
  ];

  const columns: Array<ITableColumn<ICategory>> = useMemo(() => {
    return [
      {
        key: 'name',
        title: 'Name',
        width: 150,
        render: item => (
          <IconCell
            icon={
              <Icon
                family="fontAwesome6"
                name="layer-group"
                color={colors.blue}
              />
            }
            title={item.name}
          />
        )
      },
      {
        key: 'subcategories',
        title: 'Subcategories',
        width: 150,
        render: item => (
          <IconCell
            icon={<Icon family="entypo" name="layers" color={colors.blue} />}
            title={item.subcategories.length || 0}
          />
        )
      },
      {
        key: 'transaction_count',
        title: 'Transactions',
        width: 150,
        render: item => (
          <IconCell
            icon={
              <Icon
                family="fontAwesome6"
                name="money-bill-1-wave"
                color={colors.blue}
              />
            }
            title={item.subcategories[0].transaction_count || 0}
          />
        )
      },
      {
        key: 'created_at',
        title: 'Created',
        width: 150,
        render: item => (
          <Text style={tableRowS.cell}>
            {DateUtils.format(item.created_at, 'dd.MM.yyyy')}
          </Text>
        )
      },
      {
        key: 'updated_at',
        title: 'Updated',
        width: 150,
        render: item => (
          <Text style={tableRowS.cell}>
            {DateUtils.format(item.updated_at, 'dd.MM.yyyy')}
          </Text>
        )
      },
      {
        key: 'actions',
        title: 'Actions',
        width: 150,
        render: item => <TableActions actions={getRowActions(item)} />
      }
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCategories = useCallback(async ({ pageParam = 0 }) => {
    const response = await categoryApi.getCategories({
      page: pageParam,
      size: 20,
      sortBy: 'name',
      sortDirection: 'ASC'
    });

    const { content, currentPage, totalPages } = response;

    return {
      data: content,
      nextStart: currentPage < totalPages - 1 ? currentPage + 1 : undefined
    };
  }, []);

  return (
    <>
      <InfiniteTable<ICategory>
        queryKey={queryKey}
        fetchFn={fetchCategories}
        columns={columns}
        rowOnPress={category => {
          navigation.navigate('Subcategories', { categoryId: category.id });
        }}
      />
      {confirmModal}
    </>
  );
};
