import { instance } from './instance';

export interface MajorResponse {
  apply_end_date: Date | null;
  apply_start_date: Date | null;
  id: number;
  name: string;
  priority_first: string | null;
  priority_second: string | null;
  priority_third: string | null;
}

export type MajorPriorityResponse = Pick<
  MajorResponse,
  'priority_first' | 'priority_second' | 'priority_third'
>;

export const getMajor = async (params: number) => {
  const url = `/major/${params}`;
  const { data } = await instance.get<MajorResponse>(url);

  return data;
};
