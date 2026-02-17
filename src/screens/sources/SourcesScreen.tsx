import React from 'react';

import { Text } from 'react-native';

import {
  HeadScreenLayout,
  IColumn,
  InfiniteTable,
  ScreenLayout
} from '@/shared';

interface IPhoto {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const PHOTO_COLUMNS: Array<IColumn<IPhoto>> = [
  { key: 'id', title: 'ID', width: 150 },
  { key: 'title', title: 'Заголовок', width: 150 },
  {
    key: 'url',
    title: 'Ссылка',
    width: 150,
    render: item => <Text>{item.url}</Text>
  },
  {
    key: 'thumbnailUrl',
    title: 'Заголовок',
    width: 150,
    render: item => <Text>{item.thumbnailUrl}</Text>
  }
];

export const SourcesScreen = () => {
  const fetchPhotos = async ({ pageParam = 0 }) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_start=${pageParam}&_limit=${20}`
    );
    const data = await res.json();

    return { data, nextStart: data.length === 20 ? pageParam + 20 : undefined };
  };

  return (
    <ScreenLayout isScrollable={false}>
      <HeadScreenLayout
        title="Source Management"
        text="Manage your transaction sources like bank accounts, cash, and credit cards"
      />
      <InfiniteTable<IPhoto>
        queryKey={['photos']}
        fetchFn={fetchPhotos}
        columns={PHOTO_COLUMNS}
      />
    </ScreenLayout>
  );
};
