import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { getNotice } from '@/api/notice';

export const useFetchNotice = () => {
  const { data: notices, isLoading, isError } = useQuery('notices', getNotice);

  useEffect(() => {
    if (isError) {
      console.error('Failed to fetch notices');
    }
  }, [isError]);

  return { notices, isLoading, isError };
};
