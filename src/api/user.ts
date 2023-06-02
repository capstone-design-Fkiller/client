import { instance } from './instance';

import { LoginRequest, LoginResponse, SignUpRequest, UserResponse } from '@/types/user';

export const getMe = async () => {
  const { data } = await instance.get<UserResponse>('login/');

  return data;
};

export const postLogin = async (type: LoginRequest) => {
  const { data } = await instance.post<LoginResponse>('login/', type);

  return data;
};

export const getShareUser = async (userId:number) => {
  const { data } = await instance.get<UserResponse>(`user/${userId}`);

  return data;
};
export const postSignUp = async (type: SignUpRequest) => {
  const { data } = await instance.post('registration/', type, {
    headers: {
      Authorization: ``,
    },
  });

  return data;
};
