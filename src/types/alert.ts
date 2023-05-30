export interface AlertResponse {
  id: number;
  major: string;
  message: string;
  sender: number;
  receiver: number;
  created_at: string;
}

export interface AlertRequest {
  major: number;
  message: string;
  sender: number;
  receiver: number;
}
