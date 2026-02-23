import { ISource } from '@/entities/source/model';
import { TCreateSourceForm } from '@/features/source/create-source-form/model';
import { axiosInstance, IDataResponse, IParamsRequest } from '@/shared';

class SourceApi {
  getSources = async (
    params?: IParamsRequest<ISource>
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
    data: TCreateSourceForm
  ): Promise<Omit<ISource, 'transaction_count'>> => {
    const response = await axiosInstance.post<
      Omit<ISource, 'transaction_count'>
    >('/source', data);

    return response.data;
  };

  // TODO: Edit Source

  deleteSource = async (id: ISource['id']): Promise<void> => {
    await axiosInstance.delete<void>(`/source/${id}`);
  };
}

export const sourceApi = new SourceApi();
