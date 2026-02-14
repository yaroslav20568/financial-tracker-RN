import { IAccount } from '@/entities/account/model';
import { TEditAccountForm } from '@/features/account/edit-account-form/model';
import { axiosInstance } from '@/shared';

class AccountApi {
  getAccount = async (): Promise<IAccount> => {
    const response = await axiosInstance.get<IAccount>('/account');

    return response.data;
  };

  editAccount = async (data: TEditAccountForm): Promise<IAccount> => {
    const response = await axiosInstance.put<IAccount>('/account', data);

    return response.data;
  };
}

export const accountApi = new AccountApi();
