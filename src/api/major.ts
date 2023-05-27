import { instance } from './instance';

export interface MajorResponse {
  apply_end_date: Date | null;
  apply_start_date: Date | null;
  id: number;
  name: string;
  priority_1: string | null;
  priority_2: string | null;
  priority_3: string | null;
}

export type MajorPriorityResponse = Pick<MajorResponse, 'priority_1' | 'priority_2' | 'priority_3'>;

export const getMajor = async (params: number) => {
  const { data } = await instance.get<MajorResponse>(`major/${params}`);

  return data;
};
