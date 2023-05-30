export interface MajorResponse {
  id: number;
  priority_1: {
    name: string | null;
    question: string | null;
    is_bool: boolean;
    is_ascending: boolean;
  };
  priority_2: {
    name: string | null;
    question: string | null;
    is_bool: boolean;
    is_ascending: boolean;
  };
  priority_3: {
    name: string | null;
    question: string | null;
    is_bool: boolean;
    is_ascending: boolean;
  };
  name: string;
  start_date: string | null;
  end_date: string | null;
  apply_end_date: string | null;
  apply_start_date: string | null;
  is_baserule_FCFS: boolean;
}

// export type MajorPriorityRequest = Omit<MajorResponse, 'name'>;
export type MajorPriorityRequest = RequestPriority;
export type MajorPriorityResponse = Pick<MajorResponse, 'priority_1' | 'priority_2' | 'priority_3'>;

export interface RequestPriority {
  id: number;
  name: string;
  start_date: string | null;
  end_date: string | null;
  apply_start_date: string | null;
  apply_end_date: string | null;
  is_baserule_FCFS: boolean;
  priority_1?: string | null;
  priority_2?: string | null;
  priority_3?: string | null;
}
