import { useQuery } from 'react-query';

import { getAllMajor, getApply, getLockerInfo } from '@/api/locker';

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

export const useFetchApply = () => {
  const { data } = useQuery([QUERY_KEY.apply], getApply);

  return { data };
};

export const useFetchLocker = (id: number) => {
  const { data } = useQuery([QUERY_KEY.locker, id], () => getLockerInfo(id));

  return { applicant: data };
};
