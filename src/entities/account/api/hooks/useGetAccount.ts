import { useQuery } from '@tanstack/react-query';

import { accountApi } from '@/entities/account/api';
import { QUERY_KEYS } from '@/shared';

export const useGetAccount = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.ACCOUNT],
    queryFn: accountApi.getAccount
  });
};
