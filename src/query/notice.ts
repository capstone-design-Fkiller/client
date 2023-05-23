import { useMutation, useQuery } from 'react-query';

import { getNotice, postNotice } from '@/api/notice';
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

export const useCreateNotice = () => {
  const { createToastMessage } = useToast();

  const createNoticeMutation = useMutation((notice) => postNotice(notice), {
    onSuccess: () => {
      createToastMessage('공지사항 등록 완료!', 'success');
    },
    
    onError: () => {
      createToastMessage('다시 시도해주세요.', 'error');
    },
  });

  const createNotice = async (notice) => {
    try {
      await createNoticeMutation.mutateAsync(notice);
      createToastMessage('공지사항 등록 완료!', 'success');

    } catch (error) {
      console.error('공지사항 등록 오류:', error);
      createToastMessage('다시 시도해주세요.', 'error');
    }
  };

  return { createNotice };
};
