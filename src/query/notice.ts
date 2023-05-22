import { useQuery } from 'react-query';

import { getNotice } from '@/api/notice';
import useToast from '@/hooks/useToast';

export const useFetchNotice = () => {
  const { createToastMessage } = useToast();

  const { data: notices, isLoading } = useQuery('notices', getNotice, {
    onError: () => {
      createToastMessage('공지사항을 불러오는 중에 오류가 발생했습니다.', 'error');
    },
  });

  return { data: notices, isLoading };
};