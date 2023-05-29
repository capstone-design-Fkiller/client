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
export type MajorPriorityRequest = Omit<
  MajorResponse,
  'priority_1' | 'priority_2' | 'priority_3'
> & {
  priority_1: Pick<MajorResponse['priority_1'], 'name'>;
  priority_2: Pick<MajorResponse['priority_2'], 'name'>;
  priority_3: Pick<MajorResponse['priority_3'], 'name'>;
};
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
