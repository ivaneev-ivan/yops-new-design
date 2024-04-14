export interface IUser {
  email: string
  id: number
  accessToken: string
}

export interface IGenericResponse {
  status: string
  message: string
}
export const statusCard = {
  created: 'Создан',
  payed: 'Оплачен',
  working: 'Разворачивается',
  done: 'Готов',
}
export interface IOrder {
  id: number
  count_configs: number
  is_own_server: boolean
  user: number
  location: number
  status: string
  payment_url: string
  is_payed: boolean
  solar: number
  create_at: string
  update_at: string
}

export type IService = {
  id: number
  title: string
  solar: number
}

export interface ICreateOrderData {
  count_configs: number
  is_own_server: boolean
  location: number
  accessToken: string
}
