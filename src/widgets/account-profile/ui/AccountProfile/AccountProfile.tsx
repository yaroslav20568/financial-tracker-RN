import React from 'react';

import { AccountDetails, AccountHeader, useGetAccount } from '@/entities';
import {
  BorderLayout,
  CenterLayout,
  ErrorData,
  Loader,
  useRefreshOnFocus
} from '@/shared';

export const AccountProfile = () => {
  const { data, isFetching, isError, error } = useGetAccount();

  useRefreshOnFocus();

  if (isFetching) {
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
    <BorderLayout
      header={<AccountHeader id={data?.id} name={data?.name} />}
      content={<AccountDetails {...data} />}
    />
  );
};
