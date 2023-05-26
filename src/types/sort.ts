export interface SortResponse {
  id: number;
  rank: number;
  priority_1_answer: number | null;
  priority_2_answer: number | null;
  priority_3_answer: number | null;
  created_at: string;
  major: number;
  user: number;
  building_id: number;
}

export interface SortRequest {
  list: number[];
}
