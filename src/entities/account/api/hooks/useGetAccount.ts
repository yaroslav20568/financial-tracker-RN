import { useQuery } from '@tanstack/react-query';

import { accountApi } from '@/entities/account/api';

export const useGetAccount = () => {
  return useQuery({
    queryKey: ['account'],
    queryFn: accountApi.getAccount
  });
};
