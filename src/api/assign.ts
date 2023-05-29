import { instance } from './instance';

import { AssignResponse } from '@/types/assign';

export const getAssignResult = async (major: number) => {
  const majorNumber = major || 0;
  const { data } = await instance.get<AssignResponse[]>(`assign/${majorNumber}`);
  return data;
};
