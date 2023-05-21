import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { getNotice } from '@/api/notice';

export const useFetchNotice = () => {
  const { data: notices, isLoading, isError } = useQuery('notices', getNotice);
  console.log(notices);
  useEffect(() => {
    if (isError) {
      console.error('Failed to fetch notices');
    }
  }, [isError]);

  return { data: notices, isLoading, isError };
};
