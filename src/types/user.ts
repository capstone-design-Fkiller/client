export interface LoginRequest {
  is_usermode: boolean;
  id: string;
  password: string;
}

export interface LoginResponse {
  refresh_token: string;
  access_token: string;
  user: {
    id: number;
    major: string;
    password: string;
    last_login: boolean;
    is_superuser: boolean;
    is_active: boolean;
    name: string;
    penalty: boolean;
    penalty_start_date: Date | null;
    penalty_end_date: Date | null;
    id_card_img: string;
    is_usermode: boolean;
    is_adminable: boolean;
    is_valid: boolean;
    created_at: Date;
    groups: number[];
    user_permissions: string[];
  };
}

export interface User {
  id: number;
  major: string;
  password: string;
  last_login: boolean;
  is_superuser: boolean;
  is_active: boolean;
  name: string;
  penalty: boolean;
  penalty_start_date: Date | null;
  penalty_end_date: Date | null;
  id_card_img: string;
  is_usermode: boolean;
  is_adminable: boolean;
  is_valid: boolean;
  created_at: Date;
  groups: number[];
  user_permissions: string[];
}
