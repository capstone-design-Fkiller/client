import { useMutation } from 'react-query';

import { getLogin } from '@/api/user';
import { LoginRequest } from '@/types/user';

export const useLogin = () => {
  const mutation = useMutation((body: LoginRequest) => getLogin(body));

  return mutation;
};