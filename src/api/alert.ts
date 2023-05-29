import { instance } from './instance';

import { alertRequest, alertResponse } from '@/types/alert';

export const getMyAlerts = async (id:number) => {
  const { data } = await instance.get<alertResponse>(`alert/?receiver=${id}`);

  return data;
};

export const postAlert = async (type: alertRequest) => {
  const data = await instance.post<alertResponse>('alert/', type);
  

  return data;
};
