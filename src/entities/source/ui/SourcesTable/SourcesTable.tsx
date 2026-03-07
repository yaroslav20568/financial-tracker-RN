import React, { useCallback, useMemo, useState } from 'react';

import { Text } from 'react-native';

import { sourceApi, useDeleteSource } from '@/entities/source/api';
import { ISource } from '@/entities/source/model';
import {
  QUERY_KEYS,
  DateUtils,
  IParamsRequest,
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

interface IProps {
  filters: Pick<IParamsRequest, 'sortBy' | 'sortDirection'>;
  onEdit: (source: ISource) => void;
}

export const SourcesTable = ({ filters, onEdit }: IProps) => {
  const tableRowS = useStyles();
  const { colors } = useTheme();
  const queryKey = useMemo(() => [QUERY_KEYS.SOURCES, filters], [filters]);
  const [selectedSource, setSelectedSource] = useState<ISource | null>(null);
  const { mutateAsync: deleteSourceMutate, isPending } = useDeleteSource();

  const [confirmModal, openConfirmModal] = useConfirmModal({
    title: 'Delete Source',
    text: `You want to delete a source with the name: ${selectedSource?.name}?`,
    onPress: async () => {
      if (selectedSource) {
        await deleteSourceMutate(selectedSource.id);
      }
    },
    isLoading: isPending
  });

  const getRowActions = (source: ISource): Array<ITableAction> => [
    {
      iconData: { family: 'feather', name: 'edit' },
      onPress: () => onEdit(source)
    },
    {
      iconData: {
        family: 'materialIcons',
        name: 'delete-outline',
        color: colors.red
      },
      onPress: () => {
        setSelectedSource(source);
        openConfirmModal();
      }
    }
  ];

  const columns: Array<ITableColumn<ISource>> = useMemo(() => {
    return [
      {
        key: 'name',
        title: 'Name',
        width: 150,
        render: item => (
          <IconCell
            icon={<Icon family="ionicons" name="wallet" color={colors.blue} />}
            title={item.name}
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
            title={item.transaction_count || 0}
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

  const fetchSources = useCallback(
    async ({ pageParam = 0 }) => {
      const response = await sourceApi.getSources({
        page: pageParam,
        size: 20,
        ...filters
      });

      const { content, currentPage, totalPages } = response;

      return {
        data: content,
        nextStart: currentPage < totalPages - 1 ? currentPage + 1 : undefined
      };
    },
    [filters]
  );

  return (
    <>
      <InfiniteTable<ISource>
        queryKey={queryKey}
        fetchFn={fetchSources}
        columns={columns}
      />
      {confirmModal}
    </>
  );
};
