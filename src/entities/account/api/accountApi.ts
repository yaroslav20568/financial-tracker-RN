import { AxiosError } from 'axios';

import { IAccount } from '@/entities/account/model';
import { axiosInstance, IErrorResponse } from '@/shared';

class AccountApi {
  getAccount = async (): Promise<IAccount> => {
    try {
      const response = await axiosInstance.get<IAccount>('/account');

      return response.data;
    } catch (err) {
      const error = err as AxiosError<IErrorResponse>;

      throw new Error(
        error.response?.data?.errors?.join(', ') ||
          error.response?.data?.message ||
          'Unexpected error occurred'
      );
    }
  };
}

export const accountApi = new AccountApi();
