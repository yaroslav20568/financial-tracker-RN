import React, { useState } from 'react';

import { Text } from 'react-native';

import {
  AccountDetails,
  AccountHeader,
  AccountToolbar,
  useGetAccount
} from '@/entities';
import { BorderLayout, CenterLayout, ErrorData, Loader } from '@/shared';

export const AccountProfile = () => {
  const { data, isFetching, isError, error } = useGetAccount();
  const [isShowEditForm, setIsShowEditForm] = useState(false);

  const showEditForm = () => {
    setIsShowEditForm(true);
  };

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
      content={
        <>
          <AccountToolbar
            isShowEditForm={isShowEditForm}
            showEditForm={showEditForm}
          />
          {!isShowEditForm ? (
            <AccountDetails {...data} />
          ) : (
            <Text>Edit Form</Text>
          )}
        </>
      }
    />
  );
};
