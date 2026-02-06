import React from 'react';

import { View } from 'react-native';

import { IAccount } from '@/entities/account/model';
import { colors, DateUtils, Icon } from '@/shared';

import { AccountDetailsItem } from './AccountDetailsItem';
import { useStyles } from './styles';

interface IProps extends Partial<IAccount> {}

export const AccountDetails = ({
  id,
  name,
  created_at,
  updated_at
}: IProps) => {
  const s = useStyles();

  return (
    <View>
      <View style={s.row}>
        <AccountDetailsItem
          icon={<Icon family="octicons" name="person" color={colors.gray} />}
          title="Account Name"
          subtitle={name}
        />
        <AccountDetailsItem
          icon={<Icon family="fontisto" name="email" color={colors.gray} />}
          title="Account ID"
          subtitle={id}
        />
      </View>
      <View style={[s.row, s.lastRow]}>
        <AccountDetailsItem
          icon={<Icon family="feather" name="calendar" color={colors.gray} />}
          title="Created At"
          subtitle={created_at && DateUtils.format(created_at)}
        />
        <AccountDetailsItem
          icon={
            <Icon family="materialIcons" name="update" color={colors.gray} />
          }
          title="Last Updated"
          subtitle={updated_at && DateUtils.format(updated_at)}
        />
      </View>
    </View>
  );
};
