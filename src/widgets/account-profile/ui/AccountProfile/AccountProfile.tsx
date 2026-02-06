import React from 'react';

import { ActivityIndicator } from 'react-native';

import { AccountDetails, AccountHeader, useGetAccount } from '@/entities';
import { BorderLayout, CenterLayout, useRefreshOnFocus } from '@/shared';

export const AccountProfile = () => {
  const { data, isFetching } = useGetAccount();

  useRefreshOnFocus();

  if (isFetching) {
    return (
      <CenterLayout>
        <ActivityIndicator size="large" />
      </CenterLayout>
    );
  }

  return (
    <BorderLayout
      header={<AccountHeader id={data?.id} name={data?.name} />}
      content={<AccountDetails {...data} />}
    />
  );
};
