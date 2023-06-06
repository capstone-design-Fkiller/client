export interface AlertResponse {
  id: number;
  major: string;
  message: string;
  sender: number;
  receiver: number;
  created_at: string;
  isRead: boolean;
}

export interface AlertRequest {
  major: number;
  message: string;
  sender: number;
  receiver: number;
}

export interface AlertConvertIsRead {
  receiver: number;
}
