import { useQuery } from 'react-query';

import { MajorPriorityResponse, getMajor } from '@/api/major';
import { MajorResponse } from '@/api/major';

const QUERY_KEY = {
  major: 'major',
};

export const useFetchMajor = (params: number, type?: boolean) => {
  const { data: majorInfo } = useQuery<MajorResponse | MajorPriorityResponse>(
    [QUERY_KEY.major, params],
    () => getMajor(params),
    {
      select: data => {
        const { priority_1, priority_2, priority_3 } = data;

        return type ? { priority_1, priority_2, priority_3 } : data;
      },
    }
  );

  return { majorInfo };
};
