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
export type MajorPriorityResponse = Partial<MajorResponse>;

// export interface RequestPriority extends MajorResponse {
//   user: number;
//   apply_start_date: string | null;
//   apply_end_date: string | null;
//   is_baserule_FCFS: boolean;
//   priority_first?: string | boolean;
//   priority_second?: string | boolean;
//   priority_third?: string | boolean;
// }
