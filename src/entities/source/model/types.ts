import { IBaseModel } from '@/shared';

export interface ISource extends IBaseModel {
  name: string;
  transaction_count: number | null;
}
