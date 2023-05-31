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

export type MajorPriorityRequest = MajorResponse;
export type MajorPriorityResponse = Partial<MajorResponse>;
