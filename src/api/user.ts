import { instance } from './instance';

interface UserType {
  data: {
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
    created_at: Date;
    groups: number[];
    user_permissions: string[];
  };
}

interface LoginRequest {
  is_usermode: boolean;
  id: string;
  password: string;
}

export const getLogin = async (type: LoginRequest) => {
  const { data } = await instance.post<UserType>('http://127.0.0.1:8000/login/', type);

  return data;
};
