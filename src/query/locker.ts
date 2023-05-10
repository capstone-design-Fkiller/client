import { useQuery } from 'react-query';

import {
  ApplicantRequest,
  getAllMajor,
  getLockerCounts,
  getApply,
  getLockerInfo,
} from '@/api/locker';

const QUERY_KEY = {
  major: 'major',
  apply: 'apply',
  locker: 'locker',
};

export const useFetchMajor = (id: number) => {
  const { data, isLoading } = useQuery([QUERY_KEY.major, id], () => getAllMajor(), {
    staleTime: 1000,
  });

  return { major: data, isLoading };
};

export const useFetchLockerCounts = (props: ApplicantRequest) => {
  const { data, isLoading, refetch } = useQuery(
    [QUERY_KEY.apply, { ...props }],
    () => getLockerCounts(props),
    {
      enabled: !!props.building,
    }
  );

  return { lockerCounts: data, isLoading, refetch };
};

export const useFetchLocker = (id: number) => {
  const { data } = useQuery([QUERY_KEY.locker, id], () => getLockerInfo(id));

  return { locker: data };
};

export const useApply = (props: ApplicantRequest) => {
  const { data, refetch } = useQuery(['apply'], () => getApply(props));

  return { apply: data, refetch };
};
