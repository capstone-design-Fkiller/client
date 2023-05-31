import { useMutation, useQuery, useQueryClient } from 'react-query';

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
  const queryClient = useQueryClient();

  const createAlert = (body: Pick<AlertRequest, 'message' | 'receiver'>) => {
    if (!me) throw new Error();

    return postAlert({ ...body, major: MAJOR[me.major], sender: me.id });
  };

  const mutation = useMutation(createAlert, {
    onSuccess: () => {
      createToastMessage('알림 전송 완료!', 'success');
      queryClient.invalidateQueries([QUERY_KEY.alert]);
    },
    onError: () => {
      createToastMessage('다시 시도해주세요.', 'error');
    },
  });

  return mutation;
};

export const useFetchAlerts = (userId: number) => {
  const { data, isLoading, isError } = useQuery([QUERY_KEY.alert], () => getMyAlerts(userId), {
    suspense: false,
    refetchOnWindowFocus: false,
    staleTime: 10000,
    useErrorBoundary: false,
  });

  return { data: isError ? undefined : data, isLoading };
};
