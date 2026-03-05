import React, { useState } from 'react';

import {
  AccountDetails,
  AccountHeader,
  AccountToolbar,
  useGetAccount
} from '@/entities';
import { EditAccountForm } from '@/features';
import {
  BorderLayout,
  CenterLayout,
  ErrorData,
  HeadScreenLayout,
  Loader,
  ScreenLayout,
  useRefreshOnFocus
} from '@/shared';

export const AccountScreen = () => {
  const [isShowEditForm, setIsShowEditForm] = useState(false);
  const { data, isLoading, isError, error } = useGetAccount();

  useRefreshOnFocus(['account']);

  const showEditForm = () => {
    setIsShowEditForm(true);
  };

  const closeEditForm = () => {
    setIsShowEditForm(false);
  };

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
    <ScreenLayout>
      <HeadScreenLayout
        title="Account Settings"
        text="Manage your account information and preferences"
      />
      <BorderLayout header={<AccountHeader id={data?.id} name={data?.name} />}>
        <AccountToolbar
          isShowEditForm={isShowEditForm}
          showEditForm={showEditForm}
        />
        {!isShowEditForm ? (
          <AccountDetails {...data} />
        ) : (
          <EditAccountForm account={data} closeEditForm={closeEditForm} />
        )}
      </BorderLayout>
    </ScreenLayout>
  );
};
