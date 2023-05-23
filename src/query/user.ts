import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { postLogin } from '@/api/user';
import useToast from '@/hooks/useToast';
import { LoginRequest, LoginResponse } from '@/types/user';

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
  const [me, setMe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user') as string);
    setMe(data);
    setIsLoading(false);
  }, []);

  return { me, isLoading };
};

