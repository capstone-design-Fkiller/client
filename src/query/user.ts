import { useMutation, useQuery } from 'react-query';

import { postLogin } from '@/api/user';
import useToast from '@/hooks/useToast';
import { LoginRequest, LoginResponse } from '@/types/user';

export const useLogin = () => {
  const { createToastMessage } = useToast();

  const mutation = useMutation((body: LoginRequest) => postLogin(body), {
    onSuccess: ({ data }) => {
      createToastMessage('로그인에 성공했습니다.', 'success');

      const { refresh_token, access_token } = data;

      instance.defaults.headers['Authorization'] = `Bearer ${JSON.stringify(access_token)}`;

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
  const { data, isLoading, isError } = useQuery<UserResponse>([QUERY_KEY.user], getMe, {
    suspense: false,
    refetchOnWindowFocus: false,
    staleTime: 10000,
    useErrorBoundary: false,
  });

  return { me: isError ? undefined : data, isLoading };
};

