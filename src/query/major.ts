import { useMutation, useQuery, useQueryClient } from 'react-query';

import { getMajor, putMajor as patchMajor } from '@/api/major';
import useToast from '@/hooks/useToast';
import { MajorPriorityRequest, MajorPriorityResponse } from '@/types/major';

const QUERY_KEY = {
  major: 'major',
  assign: 'assignResult',
};

export const useFetchMajor = (params: number, isCondt?: boolean) => {
  const { data: majorInfo } = useQuery<MajorPriorityResponse>(
    [QUERY_KEY.major, params],
    () => getMajor(params),
    {
      enabled: !!params,
      select: data => {
        const { priority_1, priority_2, priority_3 } = data;

        return isCondt ? { priority_1, priority_2, priority_3 } : data;
      },
    }
  );

  return { majorInfo };
};

export const usePatchMajor = () => {
  const { createToastMessage } = useToast();
  const queryClient = useQueryClient();
  const mutation = useMutation((body: Partial<MajorPriorityRequest>) => patchMajor(body), {
    onSuccess: () => {
      createToastMessage('배정 기준 설정이 완료되었습니다.', 'success');
      queryClient.invalidateQueries([QUERY_KEY.assign]);
    },
    onError: () => {
      createToastMessage('배정 기준 설정에 실패했습니다.', 'error');
    },
  });
  return mutation;
};
