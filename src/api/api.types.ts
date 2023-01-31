export interface BaseObj {
  [index: string]: any;
}
//
// Base API types

export interface ApiEntity extends BaseObj {
  id: string;
}

export type ApiPartial<T> = Omit<Partial<T>, "_id">;

export type ApiSelect<T extends ApiEntity, K extends keyof T = never> = Pick<
  T,
  "id" | K
>;

export interface ApiListResponse<T> {
  data?: T[];
  page?: number;
  total?: number;
  total_pages?: number;
}

export interface ApiResponse<T> {
  data?: T;
}

export interface ApiSelectParams {
  per_page?: number;
  page?: number;
}

export type ApiError = {
  message: {
    code: string;
    msg: string;
    stackTrace: string;
  };
};
