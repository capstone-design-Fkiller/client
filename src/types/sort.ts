export interface SortResponse {
  id: number;
  rank: number;
  priority_1_answer: boolean | number | null;
  priority_2_answer: boolean | number | null;
  priority_3_answer: boolean | number | null;
  created_at: string;
  major: number;
  user: number;
  building_id: number;
}

export interface SortRequest {
  list: number[];
}
