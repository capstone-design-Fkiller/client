import { instance } from './instance';

import { MajorResponse, MajorPriorityRequest } from '@/types/major';

export const getMajor = async (params: number) => {
  const { data } = await instance.get<MajorResponse>(`major/${params}`);

  return data;
};

export const patchMajor = async (body: Partial<MajorPriorityRequest>) => {
  const { id, ...args } = body;
  const { data } = await instance.patch<MajorResponse>(`/major/${id}`, args);

  return data;
};
