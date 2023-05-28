export interface UserResponse {
  id: number;
  name: string;
  major: string;
  password: string;
  penalty: boolean;
  penalty_start_date: Date | null;
  penalty_end_date: Date | null;
  id_card_img: string;
  is_usermode: boolean;
  is_adminable: boolean;
  is_valid: boolean;
  created_at: Date;
}

export interface LoginRequest {
  is_usermode: boolean;
  id: string;
  password: string;
}

export interface LoginResponse {
  user: UserResponse;
  refresh_token: string;
  access_token: string;
}
