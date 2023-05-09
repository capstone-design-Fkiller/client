import { useQuery } from 'react-query';

import { ApplicantRequest, getAllMajor, getApplicant, getLockerInfo } from '@/api/locker';

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

export const useFetchApplicant = (props: ApplicantRequest) => {
  const { onSuccess } = props;

  const { data, isLoading, refetch } = useQuery(
    [QUERY_KEY.apply, { ...props }],
    () => getApplicant(props),
    {
      enabled: !!props.building,
      onSuccess: onSuccess,
    }
  );

  return { applicant: data, isLoading, refetch };
};

export const useFetchLocker = (id: number) => {
  const { data } = useQuery([QUERY_KEY.locker, id], () => getLockerInfo(id));

  return { applicant: data };
};
