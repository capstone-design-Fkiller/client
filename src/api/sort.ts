import { instance } from './instance';

import { SortRequest, SortResponse } from '@/types/sort';

export const getSortResult = async (major: number) => {
  const majorNumber = major || 0;
  const { data } = await instance.get<SortResponse[]>(`sort/${majorNumber}`);

  return data;
};

export const postSortResult = async (major: number, body: SortRequest) => {
  const majorNumber = major || 0;
  const { data } = await instance.post<SortResponse>(`assign/${majorNumber}`, body);

  return data;
};
