import { useMutation, useQuery } from 'react-query';

import { getMyAlerts, postAlert } from '@/api/alert';
import useToast from '@/hooks/useToast';
import { alertRequest, alertResponse } from '@/types/alert';

const QUERY_KEY = {
  alert: 'alert',
};

export const usePostAlert = () => {
  const { createToastMessage } = useToast();

  const mutation = useMutation((body: alertRequest) => postAlert(body), {
    onSuccess: ({ data }) => {
      console.log(data, '알림 보내기 완료 출력!');
      createToastMessage('알림을 성공적으로 보냈습니다.', 'success');
    },
    onError: () => {
      createToastMessage('빈칸을 다 작성해주세요!', 'error');
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
