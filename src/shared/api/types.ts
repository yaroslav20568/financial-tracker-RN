export type TSortDirection = 'ASC' | 'DESC';

export interface IParamsRequest {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDirection?: TSortDirection;
}

export interface IDataResponse<T> {
  content: Array<T>;
  pageSize: number;
  currentPage: number;
  totalElements: number;
  totalPages: number;
}

export interface IErrorResponse {
  message: string;
  errors: Array<string>;
  at: string;
}
