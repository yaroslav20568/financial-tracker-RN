import { IBaseModel } from '@/shared';

interface ISubcategory extends IBaseModel {
  name: string;
  transaction_count: number;
}

export interface ICategory extends IBaseModel {
  name: string;
  subcategories: Array<ISubcategory>;
}
