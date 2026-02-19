import { ISource } from '@/entities/source/model';
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
}

export const sourceApi = new SourceApi();
