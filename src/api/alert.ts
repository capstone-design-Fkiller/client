import { instance } from './instance';

import { AlertConvertIsRead, AlertRequest, AlertResponse } from '@/types/alert';

export const getMyAlerts = async (userId: number) => {
  const { data } = await instance.get<AlertResponse[]>(`alert/?receiver=${userId}`);

  return data;
};

export const postAlert = async (type: AlertRequest) => {
  const data = await instance.post<AlertResponse>('alert/', type);

  return data;
};

export const patchAlert = async ({ receiver }: AlertConvertIsRead) => {
  const data = await instance.patch<AlertResponse>(`alert/isRead/${receiver}`);

  return data;
};
