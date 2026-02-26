import { ICategory } from '@/entities/category/model';
import { TCategoryForm } from '@/features/category/manage-category-form/model';
import { axiosInstance, IDataResponse, IParamsRequest } from '@/shared';

class CategoryApi {
  getCategories = async (
    params?: IParamsRequest
  ): Promise<IDataResponse<ICategory>> => {
    const response = await axiosInstance.get<IDataResponse<ICategory>>(
      '/category/subcategories',
      {
        params
      }
    );

    return response.data;
  };

  createCategory = async (
    data: TCategoryForm
  ): Promise<Omit<ICategory, 'subcategories'>> => {
    const response = await axiosInstance.post<Omit<ICategory, 'subcategories'>>(
      '/category',
      data
    );

    return response.data;
  };

  editCategory = async (
    id: ICategory['id'],
    data: TCategoryForm
  ): Promise<Omit<ICategory, 'subcategories'>> => {
    const response = await axiosInstance.put<Omit<ICategory, 'subcategories'>>(
      `/category/${id}`,
      data
    );

    return response.data;
  };

  deleteCategory = async (id: ICategory['id']): Promise<void> => {
    await axiosInstance.delete<void>(`/category/${id}`);
  };
}

export const categoryApi = new CategoryApi();
