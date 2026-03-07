import React, { useMemo } from 'react';

import { View, Text } from 'react-native';

import { useDeleteSubcategory } from '@/entities/category/api';
import { ISubcategory } from '@/entities/category/model';
import {
  BorderLayout,
  DateUtils,
  Icon,
  ITableAction,
  TableActions,
  useConfirmModal,
  useTheme
} from '@/shared';

import { useStyles } from './styles';

interface IProps extends Omit<ISubcategory, 'transaction_count'> {}

export const SubcategoryItem = ({ id, name, created_at }: IProps) => {
  const s = useStyles();
  const { colors } = useTheme();
  const { mutateAsync: deleteSubcategoryMutate, isPending } =
    useDeleteSubcategory();

  const [confirmModal, openConfirmModal] = useConfirmModal({
    title: 'Delete Source',
    text: `You want to delete a source with the name: ${name}?`,
    onPress: async () => {
      await deleteSubcategoryMutate(id);
    },
    isLoading: isPending
  });

  const actions: Array<ITableAction> = useMemo(() => {
    return [
      {
        iconData: { family: 'feather', name: 'edit' },
        onPress: () => {}
      },
      {
        iconData: {
          family: 'materialIcons',
          name: 'delete-outline',
          color: colors.red
        },
        onPress: openConfirmModal
      }
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openConfirmModal]);

  return (
    <BorderLayout padding={[10, 15]}>
      <View style={s.container}>
        <View style={s.textsWrapper}>
          <View style={s.iconWrapper}>
            <Icon family="entypo" name="layers" color={colors.blue} />
            <Text style={s.title}>{name}</Text>
          </View>
          <Text style={s.text}>
            Created:{'\n'}
            {DateUtils.format(created_at, 'dd.MM.yyyy')}
          </Text>
        </View>
        <TableActions actions={actions} />
      </View>
      {confirmModal}
    </BorderLayout>
  );
};
