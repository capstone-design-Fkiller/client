import { useQuery } from 'react-query';

import { getLogin } from '@/api/user';

export const useLogin = () => {
  const { data } = useQuery(['user'], () =>
    getLogin({
      is_usermode: true,
      id: '2017',
      password: 'qwer1234!',
    })
  );

  return data;
};
