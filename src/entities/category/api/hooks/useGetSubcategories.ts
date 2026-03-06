import { useQuery } from '@tanstack/react-query';

import { categoryApi } from '@/entities/category/api';
import { ICategory } from '@/entities/category/model';
import { QUERY_KEYS, IParamsRequest } from '@/shared';

export const useGetSubcategories = (
  categoryId: ICategory['id'],
  params?: IParamsRequest
) => {
  return useQuery({
    queryKey: [QUERY_KEYS.SUBCATEGORIES, categoryId, params],
    queryFn: () => categoryApi.getSubcategories(categoryId, params)
  });
};
