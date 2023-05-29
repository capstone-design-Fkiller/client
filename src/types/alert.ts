export interface alertResponse {
  id: number;
  major: string;
  message: string;
  sender: number;
  receiver: number;
  created_at: string;
}

export interface alertRequest {
  major: number;
  message: string;
  sender: number;
  receiver: number;
}
