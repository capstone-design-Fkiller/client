import { instance } from './instance';

import { LoginRequest, LoginResponse, UserResponse } from '@/types/user';

export const getMe = async () => {
  const { data } = await instance.get<UserResponse>('http://127.0.0.1:8000/login/');

  return data;
};

export const postLogin = async (type: LoginRequest) => {
  const data = await instance.post<LoginResponse>('http://127.0.0.1:8000/login/', type);

  return data;
};
