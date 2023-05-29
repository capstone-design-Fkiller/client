import { useMutation, useQuery } from 'react-query';

import { useFetchMe } from './user';

import { getMyAlerts, postAlert } from '@/api/alert';
import { MAJOR } from '@/constants/major';
import useToast from '@/hooks/useToast';
import { AlertRequest } from '@/types/alert';

const QUERY_KEY = {
  alert: 'alert',
};

export const useCreateAlertMutation = () => {
  const { me } = useFetchMe();
  const { createToastMessage } = useToast();

  const createAlert = (body: Pick<AlertRequest, 'message' | 'receiver'>) => {
    if (!me) throw new Error();

    return postAlert({ ...body, major: MAJOR[me.major], sender: me.id });
  };

  const mutation = useMutation(createAlert, {
    onSuccess: () => {
      createToastMessage('알림 전송 완료!', 'success');
    },
    onError: () => {
      createToastMessage('다시 시도해주세요.', 'error');
    },
  });

  return mutation;
};

export const useFetchAlerts = (id: number) => {
  const { data, isLoading, isError } = useQuery([QUERY_KEY.alert], () => getMyAlerts(id), {
    suspense: false,
    refetchOnWindowFocus: false,
    staleTime: 10000,
    useErrorBoundary: false,
  });

  return { data: isError ? undefined : data, isLoading };
};
