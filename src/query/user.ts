import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import { getLogin as postLogin, getMe } from '@/api/user';
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
      // ! 임시로 등록해 둔 옵션, 추후 fetchMe api가 개발되면 제거할 예정
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('refresh_token', JSON.stringify(data.refresh_token));
      localStorage.setItem('access_token', JSON.stringify(data.access_token));
    },
    onError: () => {
      createToastMessage('다시 시도해주세요!', 'error');
    },
  });

  return mutation;
};

export const useFetchMe = () => {
  // const { data } = useQuery([QUERY_KEY.user], getMe);
  const [isLoading, setIsLoading] = useState(true);
  const data: UserResponse = JSON.parse(localStorage.getItem('user') as string);

  useEffect(() => {
    if (data) setIsLoading(true);
    else setIsLoading(false);
  }, [data]);

  return { me: data, isLoading };
};
