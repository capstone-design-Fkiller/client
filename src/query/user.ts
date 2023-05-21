import { useEffect, useState } from 'react';
import { useMutation, useQuery, QueryClient } from 'react-query';

import { instance } from '@/api/instance';
import { postLogin as postLogin, getMe } from '@/api/user';
import useToast from '@/hooks/useToast';
import { LoginRequest, UserResponse } from '@/types/user';

const QUERY_KEY = {
  user: 'user',
};

export const useLogin = () => {
  const { createToastMessage } = useToast();

  const mutation = useMutation((body: LoginRequest) => postLogin(body), {
    onSuccess: res => {
      createToastMessage('로그인에 성공했습니다.', 'success');

      const { refresh_token, access_token } = res.data;
      // ! 임시로 등록해 둔 옵션, 추후 fetchMe api가 개발되면 제거할 예정

      localStorage.setItem('refresh_token', JSON.stringify(refresh_token));
      localStorage.setItem('access_token', JSON.stringify(access_token));
    },
    onError: () => {
      createToastMessage('아이디와 비밀번호를 확인해주세요!', 'error');
    },
  });

  return mutation;
};

export const useFetchMe = () => {
  // const { data, isLoading, isError } = useQuery<UserResponse>([QUERY_KEY.user], getMe);

  const [isLoading, setIsLoading] = useState(true);
  const data: UserResponse = JSON.parse(localStorage.getItem('access_token') as string);

  useEffect(() => {
    if (data) setIsLoading(true);
    else setIsLoading(false);
  }, [data]);

  return { me: data || undefined, isLoading };
};
