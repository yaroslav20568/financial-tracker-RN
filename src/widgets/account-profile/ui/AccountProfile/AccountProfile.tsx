import React, { useState } from 'react';

import {
  AccountDetails,
  AccountHeader,
  AccountToolbar,
  useGetAccount
} from '@/entities';
import { EditAccountForm } from '@/features';
import { BorderLayout, CenterLayout, ErrorData, Loader } from '@/shared';

export const AccountProfile = () => {
  const { data, isLoading, isError, error } = useGetAccount();
  const [isShowEditForm, setIsShowEditForm] = useState(false);

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
    <BorderLayout
      header={<AccountHeader id={data?.id} name={data?.name} />}
      content={
        <>
          <AccountToolbar
            isShowEditForm={isShowEditForm}
            showEditForm={showEditForm}
          />
          {!isShowEditForm ? (
            <AccountDetails {...data} />
          ) : (
            <EditAccountForm {...data} closeEditForm={closeEditForm} />
          )}
        </>
      }
    />
  );
};
