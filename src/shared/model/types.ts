export interface ITimestamps {
  created_at: string;
  updated_at: string;
}

export interface IBaseModel extends ITimestamps {
  id: string;
}

export type TSize = 's' | 'm' | 'l';

export type TSizeSL = Exclude<TSize, 'm'>;
