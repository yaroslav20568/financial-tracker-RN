import React from 'react';

import { AccountDetails, AccountHeader, useGetAccount } from '@/entities';
import {
  BorderLayout,
  CenterLayout,
  Loader,
  useRefreshOnFocus
} from '@/shared';

export const AccountProfile = () => {
  const { data, isFetching } = useGetAccount();

  useRefreshOnFocus();

  if (isFetching) {
    return (
      <CenterLayout>
        <Loader />
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
