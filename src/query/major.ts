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
        const { priority_first, priority_second, priority_third } = data;

        return type ? { priority_first, priority_second, priority_third } : data;
      },
    }
  );

  return { majorInfo };
};
