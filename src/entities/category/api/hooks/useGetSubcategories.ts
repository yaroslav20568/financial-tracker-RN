import { useQuery } from '@tanstack/react-query';

import { categoryApi } from '@/entities/category/api';
import { ICategory } from '@/entities/category/model';
import { IParamsRequest } from '@/shared';

export const useGetSubcategories = (
  categoryId: ICategory['id'],
  params?: IParamsRequest
) => {
  return useQuery({
    queryKey: ['subcategories', categoryId, params],
    queryFn: () => categoryApi.getSubcategories(categoryId, params)
  });
};
