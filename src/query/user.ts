import { useMutation, useQuery } from 'react-query';

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
    onSuccess: ({ data }) => {
      createToastMessage('로그인에 성공했습니다.', 'success');

      const { refresh_token, access_token } = data;

      instance.defaults.headers['Authorization'] = `Bearer ${JSON.stringify(access_token)}`;

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
  const { data, isLoading, isError } = useQuery<UserResponse>([QUERY_KEY.user], getMe, {
    suspense: false,
    refetchOnWindowFocus: false,
    staleTime: 10000,
    useErrorBoundary: false,
  });

  return { me: isError ? undefined : data, isLoading };
};
