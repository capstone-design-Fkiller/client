import { instance } from './instance';

import { UserResponse, LoginRequest, LoginResponse } from '@/types/user';

export const getMe = async () => {
  // // const { data } = await instance.get<UserResponse>('login/');
  const data = await instance.get<LoginResponse>('login/');

  return data;
};

export const postLogin = async (type: LoginRequest): Promise<LoginResponse> => {
  const { data } = await instance.post<LoginResponse>('login/', type);
  return data;
};
