import { useQuery } from 'react-query';

import { getAllMajor, getLockerCounts, getApply, getLockerInfo } from '@/api/locker';
import { LockerRequest } from '@/types/locker';

const QUERY_KEY = {
  major: 'major',
  apply: 'apply',
  lockerCounts: 'lockerCounts',
  locker: 'locker',
};

export const useFetchMajor = (id: number) => {
  const { data, isLoading } = useQuery([QUERY_KEY.major, id], () => getAllMajor(), {
    staleTime: 1000,
  });

  return { major: data, isLoading };
};

export const useFetchApplicant = (props: LockerRequest) => {
  const { data: lockerCounts, refetch: lockerRefetch } = useQuery(
    [QUERY_KEY.lockerCounts, { ...props }],
    () => getLockerCounts(props)
  );

  const { data: apply, refetch: applyRefetch } = useQuery([QUERY_KEY.apply, { ...props }], () =>
    getApply(props)
  );

  const refetch = () => {
    lockerRefetch();
    applyRefetch();
  };

  return { data: { apply, lockerCounts }, refetch };
};

export const useFetchLocker = (id: number) => {
  const { data } = useQuery([QUERY_KEY.locker, id], () => getLockerInfo(id));

  return { locker: data };
};
