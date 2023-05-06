import { useQuery } from 'react-query';

import { getLockers } from '@/api/locekr';

const QUERY_KEY = {
  major: 'major',
};

export const useFetchMajor = (id: number) => {
  const { data, isLoading } = useQuery([QUERY_KEY.major, id], () => getLockers(id), {
    staleTime: 1000,
  });

  return { major: data, isLoading };
};
