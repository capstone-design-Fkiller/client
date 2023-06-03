import { useMutation, useQuery, useQueryClient } from 'react-query';

import { getSortResult, postSortResult } from '@/api/sort';
import useToast from '@/hooks/useToast';
import { SortRequest } from '@/types/sort';

const QUERY_KEY = {
  sort: 'sort',
  assign: 'assignResult',
};

export const useFetchSort = (major: number) => {
  const { createToastMessage } = useToast();

  const { data: sorts, isLoading } = useQuery([QUERY_KEY.sort], () => getSortResult(major), {
    onError: () => {
      createToastMessage('오류가 발생했습니다.', 'error');
    },
    staleTime: 60000,
    refetchInterval: 60000,
    refetchOnWindowFocus: false,
  });

  return { data: sorts, isLoading };
};

export const useLockerAssignMutation = () => {
  const { createToastMessage } = useToast();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ major, sortResult }: { major: number; sortResult: SortRequest }) =>
      postSortResult(major, sortResult),
    {
      onSuccess: () => {
        createToastMessage('배정 확정 완료!', 'success');
        queryClient.invalidateQueries([QUERY_KEY.assign]);
      },
      onError: () => {
        createToastMessage('다시 시도해주세요.', 'error');
      },
    }
  );

  return mutation;
};
