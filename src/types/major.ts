export interface Priority {
  name: string;
  question: string;
  is_bool: boolean;
  is_ascending: boolean;
}

export interface MajorResponse {
  apply_end_date: string | null;
  apply_start_date: string | null;
  start_date: string | null;
  end_date: string | null;
  is_baserule_FCFS: boolean;
  id: number;
  name: string;
  priority_1: Priority | null;
  priority_2: Priority | null;
  priority_3: Priority | null;
}

export interface MajorRequest {
  apply_end_date: Date | null;
  apply_start_date: Date | null;
  start_date: Date | null;
  end_date: Date | null;
  is_baserule_FCFS: boolean;
  id: number;
  name: string;
  priority_1: string | null;
  priority_2: string | null;
  priority_3: string | null;
}

export type MajorPriorityRequest = MajorRequest;
export type MajorPriorityResponse = Partial<MajorResponse>;

export interface MajorPriorityAnswerRequest {
  priority_1_answer: string | boolean | null;
  priority_2_answer: string | boolean | null;
  priority_3_answer: string | boolean | null;
}
