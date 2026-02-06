import { IAccount } from '@/entities/account/model';
import { axiosInstance } from '@/shared';

class AccountApi {
  getAccount = async (): Promise<IAccount> => {
    const response = await axiosInstance.get<IAccount>('/account');

    return response.data;
  };
}

export const accountApi = new AccountApi();
