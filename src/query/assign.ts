import { useQuery, useQueryClient } from 'react-query';

import { getAssignResult } from '@/api/assign';
import useToast from '@/hooks/useToast';

const QUERY_KEY = {
  assign: 'assignResult',
};

export const useFetchAssign = (major: number) => {
  const { createToastMessage } = useToast();
  const queryClient = useQueryClient();

  const { data: assigns, isLoading } = useQuery(QUERY_KEY.assign, () => getAssignResult(major), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.assign]);
    },
    onError: () => {
      createToastMessage('오류가 발생했습니다.', 'error');
    },
  });

  return { data: assigns, isLoading };
};
