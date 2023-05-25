import { instance } from './instance';

import { LoginRequest, LoginResponse, UserResponse } from '@/types/user';

export const getMe = async () => {
  const { data } = await instance.get<UserResponse>('login/');

  return data;
};

export const postLogin = async (type: LoginRequest) => {
  const data = await instance.post<LoginResponse>('login/', type);

  return data;
};
