export interface IUser {
  email: string;
  id: number;
  accessToken: string;
}

export interface IGenericResponse {
  status: string;
  message: string;
}

export interface IOrder {
  id: number;
  count_configs: number;
  is_own_server: boolean;
  user: number;
  location: number;
  solar: number;
}

export type IService = {
  id: number;
  title: string;
  solar: number;
};
