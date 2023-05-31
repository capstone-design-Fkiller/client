import { useMutation, useQuery } from 'react-query';

import { getMajor, putMajor } from '@/api/major';
import useToast from '@/hooks/useToast';
import { MajorPriorityRequest, MajorPriorityResponse } from '@/types/major';

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
        const { priority_1, priority_2, priority_3 } = data;

        return isCondt ? { priority_1, priority_2, priority_3 } : data;
      },
    }
  );

  return { majorInfo };
};

export const usePutMajor = () => {
  const { createToastMessage } = useToast();
  const mutation = useMutation((body: Partial<MajorPriorityRequest>) => putMajor(body), {
    onSuccess: () => {
      createToastMessage('배정 기준 설정이 완료되었습니다.', 'success');
    },
    onError: () => {
      createToastMessage('배정 기준 설정에 실패했습니다.', 'error');
    },
  });
  return mutation;
};
