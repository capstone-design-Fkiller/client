import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';

import { getMajor, patchMajor } from '@/api/major';
import useToast from '@/hooks/useToast';
import { MajorPriorityRequest, MajorPriorityResponse, MajorResponse } from '@/types/major';

const QUERY_KEY = {
  major: 'major',
};

export const useFetchMajor = (params: number, isCondt?: boolean) => {
  const { data: majorInfo } = useQuery<MajorPriorityResponse>(
    [QUERY_KEY.major, params],
    () => getMajor(params),
    {
      enabled: !!params,
      select: data => {
        const { priority_1, priority_2, priority_3, is_baserule_FCFS } = data;

        return isCondt ? { priority_1, priority_2, priority_3, is_baserule_FCFS } : data;
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
      queryClient.invalidateQueries([QUERY_KEY.major]);
    },
    onError: () => {
      createToastMessage('배정 기준 설정에 실패했습니다.', 'error');
    },
  });
  return mutation;
};

export const useFetchSavedMajor = (id: number) => {
  const { data: majorInfo } = useQuery<MajorResponse>([QUERY_KEY.major, id], () => getMajor(id), {
    enabled: !!id,
    select: data => {
      return data;
    },
  });

  return { majorInfo };
};
