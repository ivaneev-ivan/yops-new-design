export interface IUser {
  email: string;
  id: number;
  accessToken: string;
}

export interface IGenericResponse {
  status: string;
  message: string;
}
