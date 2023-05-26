export interface UserResponse {
  id: number;
  major: string;
  password: string;
  last_login: boolean;
  is_superuser: boolean;
  is_active: boolean;
  name: string;
  penalty: boolean;
  penalty_start_date: string | null;
  penalty_end_date: string | null;
  id_card_img: string;
  is_usermode: boolean;
  is_adminable: boolean;
  is_valid: boolean;
  created_at: string;
  groups: number[];
  user_permissions: string[];
}

export interface LoginRequest {
  is_usermode: boolean;
  id: string;
  password: string;
}

export interface LoginResponse {
  refresh_token: string;
  access_token: string;
}
