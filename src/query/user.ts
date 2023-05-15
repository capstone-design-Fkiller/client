import { useMutation, useQuery } from 'react-query';

import { getLogin, getMe } from '@/api/user';
import { LoginRequest } from '@/types/user';

const QUERY_KEY = {
  user: 'user',
};

export const useLogin = () => {
  const mutation = useMutation((body: LoginRequest) => getLogin(body), {
    onSuccess: ({ data }) => {
      // ! 임시로 등록해 둔 옵션, 추후 fetchMe api가 개발되면 제거할 예정
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('refresh_token', JSON.stringify(data.refresh_token));
      localStorage.setItem('access_token', JSON.stringify(data.access_token));
    },
  });

  return mutation;
};

export const useFetchMe = () => {
  // const { data } = useQuery([QUERY_KEY.user], getMe);
  const data = JSON.parse(localStorage.getItem('user') as string);

  return { me: data };
};
