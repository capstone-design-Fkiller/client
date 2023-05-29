import { instance } from './instance';

export interface MajorResponse {
  apply_end_date: string | null;
  apply_start_date: string | null;
  is_baserule_FCFS: boolean;
  id: number;
  name: string;
  priority_1: string | null;
  priority_2: string | null;
  priority_3: string | null;
}

// export type MajorPriorityRequest = Omit<MajorResponse, 'name'>;
export type MajorPriorityRequest = MajorResponse;
export type MajorPriorityResponse = Pick<MajorResponse, 'priority_1' | 'priority_2' | 'priority_3'>;

export interface RequestPriority extends MajorResponse {
  user: number;
  apply_start_date: string | null;
  apply_end_date: string | null;
  is_baserule_FCFS: boolean;
  priority_first?: string | boolean;
  priority_second?: string | boolean;
  priority_third?: string | boolean;
}

export const getMajor = async (params: number) => {
  const { data } = await instance.get<MajorResponse>(`major/${params}`);

  return data;
};

export const putMajor = async (body: Partial<MajorPriorityRequest>) => {
  const { id, ...args } = body;
  const { data } = await instance.put<MajorResponse>(`/major/${id}`, args);

  return data;
};
