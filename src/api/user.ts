import { instance } from './instance';

import { LoginRequest, LoginResponse } from '@/types/user';

export const getLogin = async (type: LoginRequest) => {
  const data = await instance.post<LoginResponse>('login/', type);

  return data;
};
