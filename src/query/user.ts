import { useMutation, useQuery, useQueryClient } from 'react-query';

import { instance } from '@/api/instance';
import { postLogin as postLogin, getMe, getShareUser } from '@/api/user';
import useToast from '@/hooks/useToast';
import { LoginRequest, UserResponse } from '@/types/user';

const QUERY_KEY = {
  user: 'user',
  shareUser: 'shareUser',
};

export const useLogin = () => {
  const { createToastMessage } = useToast();
  const mutation = useMutation((body: LoginRequest) => postLogin(body), {
    onSuccess: res => {
      createToastMessage('로그인에 성공했습니다.', 'success');

      const { refresh_token, access_token } = res;

      instance.defaults.headers['Authorization'] = `Bearer ${access_token}`;

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
  const { createToastMessage } = useToast();

  const { data, isLoading, isError } = useQuery<UserResponse>([QUERY_KEY.user], getMe, {
    suspense: false,
    refetchOnWindowFocus: false,
    staleTime: 10000,
    useErrorBoundary: false,
  });

  const queryClient = useQueryClient();

  const logout = () => {
    instance.defaults.headers['Authorization'] = '';

    queryClient.clear();

    localStorage.removeItem('access_token');

    createToastMessage('로그아웃 되었습니다.', 'success');
  };

  return { me: isError ? undefined : data, isLoading, logout };
};

export const useFetchShareUser = (userId: number) => {
  const { data, isLoading, isError } = useQuery<UserResponse>(
    [QUERY_KEY.shareUser],
    () => getShareUser(userId),
    {
      suspense: false,
      refetchOnWindowFocus: false,
      staleTime: 10000,
      useErrorBoundary: false,
    }
  );

  return { user: isError ? undefined : data, isLoading };
};
