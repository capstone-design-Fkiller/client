export interface Priority {
  name: string;
  question: string;
  is_bool: boolean;
  is_ascending: boolean;
}

export interface MajorResponse {
  apply_end_date: string | null;
  apply_start_date: string | null;
  is_baserule_FCFS: boolean;
  id: number;
  name: string;
  priority_1: Priority | null;
  priority_2: Priority | null;
  priority_3: Priority | null;
}

// export type MajorPriorityRequest = Omit<MajorResponse, 'name'>;
export type MajorPriorityRequest = MajorResponse;
export type MajorPriorityResponse = Pick<MajorResponse, 'priority_1' | 'priority_2' | 'priority_3'>;

export interface MajorPriorityAnswerRequest {
  priority_1: string | null;
  priority_2: string | null;
  priority_3: string | null;
}
