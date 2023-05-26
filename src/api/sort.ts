import { instance } from './instance';

import { SortRequest, SortResponse } from '@/types/sort';

export const getSortResult = async (major: number) => {
  const majorNumber = major || 26;
  const { data } = await instance.get<SortResponse>(`sort/${majorNumber}`);
  return data;
};

export const postSortResult = async (major: number, sortResult: SortRequest) => {
  const majorNumber = major || 26;
  const { data } = await instance.post<SortRequest>(`assign/${majorNumber}`, sortResult);

  return data;
};
