import { instance } from './instance';

import { LoginRequest, LoginResponse, UserResponse } from '@/types/user';

export const getLogin = async (type: LoginRequest) => {
  const data = await instance.post<LoginResponse>('login/', type);

  return data;
};

export const getMe = async () => {
  const { data } = await instance.get<UserResponse>('user/me/');

  return data;
};
