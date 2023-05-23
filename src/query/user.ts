import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import { getMe, postLogin } from '@/api/user';
import useToast from '@/hooks/useToast';
import { LoginRequest, LoginResponse, UserResponse } from '@/types/user';

const QUERY_KEY = {
  user: 'user',
};

export const useLogin = () => {
  const { createToastMessage } = useToast();
  const mutation = useMutation<LoginResponse, unknown, LoginRequest>((body: LoginRequest) => postLogin(body), {
    onSuccess: (data: LoginResponse) => {
      createToastMessage('로그인에 성공했습니다.', 'success');

      // 로그인 성공 시 필요한 정보 추출
      const { refresh_token, access_token, user } = data;

      // 로컬 스토리지에 정보 저장
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('refresh_token', refresh_token);
      localStorage.setItem('access_token', access_token);
    },
    onError: () => {
      createToastMessage('아이디와 비밀번호를 확인해주세요!', 'error');
    },
  });

  return mutation;
};


export const useFetchMe = () => {
  const storedData = localStorage.getItem('user');
  const [me, setMe] = useState<UserResponse | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!storedData) {
      setMe(undefined);
      setIsLoading(false);
      return;
    }

    try {
      const parsedData = JSON.parse(storedData);
      setMe(parsedData);
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to parse user data from localStorage:', error);
      setMe(undefined);
      setIsLoading(false);
    }
  }, [storedData]);

  return { me, isLoading };
};

