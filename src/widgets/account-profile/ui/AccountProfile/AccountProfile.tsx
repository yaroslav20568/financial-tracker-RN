import React from 'react';

import { AccountDetails, AccountHeader, useGetAccount } from '@/entities';
import { BorderLayout } from '@/shared';

export const AccountProfile = () => {
  const { data } = useGetAccount();

  return (
    <BorderLayout
      header={<AccountHeader id={data?.id} name={data?.name} />}
      content={<AccountDetails {...data} />}
    />
  );
};
