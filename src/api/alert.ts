import { instance } from './instance';

import { AlertRequest, AlertResponse } from '@/types/alert';

export const getMyAlerts = async (id:number) => {
  const { data } = await instance.get<AlertResponse[]>(`alert/?receiver=${id}`);

  return data;
};

export const postAlert = async (type: AlertRequest) => {
  const data = await instance.post<AlertResponse>('alert/', type);
  
  return data;
};
