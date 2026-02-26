import { ISource } from '@/entities/source/model';
import { TSourceForm } from '@/features/source/manage-source-form/model';
import { axiosInstance, IDataResponse, IParamsRequest } from '@/shared';

class SourceApi {
  getSources = async (
    params?: IParamsRequest
  ): Promise<IDataResponse<ISource>> => {
    const response = await axiosInstance.get<IDataResponse<ISource>>(
      '/source',
      {
        params
      }
    );

    return response.data;
  };

  createSource = async (
    data: TSourceForm
  ): Promise<Omit<ISource, 'transaction_count'>> => {
    const response = await axiosInstance.post<
      Omit<ISource, 'transaction_count'>
    >('/source', data);

    return response.data;
  };

  editSource = async (
    id: ISource['id'],
    data: TSourceForm
  ): Promise<Omit<ISource, 'transaction_count'>> => {
    const response = await axiosInstance.put<
      Omit<ISource, 'transaction_count'>
    >(`/source/${id}`, data);

    return response.data;
  };

  deleteSource = async (id: ISource['id']): Promise<void> => {
    await axiosInstance.delete<void>(`/source/${id}`);
  };
}

export const sourceApi = new SourceApi();
