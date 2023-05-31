import { instance } from './instance';

import { MajorPriorityRequest, MajorResponse } from '@/types/major';

export const getMajor = async (params: number) => {
  const { data } = await instance.get<MajorResponse>(`major/${params}`);

  return data;
};

export const putMajor = async (body: Partial<MajorPriorityRequest>) => {
  const { id, ...args } = body;
  const { data } = await instance.patch<MajorResponse>(`/major/${id}`, args);

  return data;
};
