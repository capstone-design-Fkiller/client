export interface UserResponse {
  id: number;
  name: string;
  major: string;
  penalty: boolean;
  penalty_start_date: string | null;
  penalty_end_date: string | null;
  id_card_img: string;
  is_usermode: boolean;
  is_adminable: boolean;
  is_valid: boolean;
  created_at: string;
  locker_id: number | undefined;
  // locker: LockerResponse | undefined;
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

export interface SignUpRequest {
  password1: string;
  password2: string;
  id: string;
  major: number;
  name: string;
}
