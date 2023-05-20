import { useQuery } from 'react-query';

import { getAllMajor, getLockerCounts, getApply, getLockerInfo, getMajorLocker, deleteMajorLocker } from '@/api/locker';
import { LockerRequest } from '@/types/locker';

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

export const useFetchApplicant = (props: LockerRequest) => {
  const { data: lockerCounts, refetch: lockerRefetch } = useQuery(
    [QUERY_KEY.apply, { ...props }],
    () => getLockerCounts(props)
  );

  const { data: apply, refetch: applyRefetch } = useQuery(['apply'], () => getApply(props));

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

// 배정 결과 가져오는 api 생기면 수정 예정
export const useFetchResult = (major: number) => {
  const { data } = useQuery([QUERY_KEY.locker, major], () => getMajorLocker(major));
  const lockerData = data || null;
  return { locker: lockerData };
};

// 배정 결과 삭제하는 api 생기면 수정 예정
export const deleteResult = async (id: number) => {
  if (id !== null) {
    await deleteMajorLocker(id);
  }
};