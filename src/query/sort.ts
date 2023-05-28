import { useMutation, useQuery } from 'react-query';

import { postSortResult, getSortResult } from '@/api/sort';
import useToast from '@/hooks/useToast';
import { SortRequest } from '@/types/sort';

export const useFetchSort = (major: number) => {
  const { createToastMessage } = useToast();

  const { data: lockers, isLoading } = useQuery('sortResult', () => getSortResult(major), {
    onError: () => {
      createToastMessage('오류가 발생했습니다.', 'error');
    },
  });

  return { data: lockers, isLoading };
};

export const useLockerAssignMutation = () => {
  const { createToastMessage } = useToast();
  const mutation = useMutation(
    ({ major, sortResult }: { major: number; sortResult: SortRequest }) =>
      postSortResult(major, sortResult),
    {
      onSuccess: () => {
        createToastMessage('배정 확정 완료!.', 'success');
      },
      onError: () => {
        createToastMessage('다시 시도해주세요.', 'error');
      },
    }
  );

  return mutation;
};
