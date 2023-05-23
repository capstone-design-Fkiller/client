import { useMutation, useQuery } from 'react-query';

import { getNotice, postNotice } from '@/api/notice';
import { MAJOR } from '@/constants/major';
import useToast from '@/hooks/useToast';
import { useFetchMe } from '@/query/user';
import { NoticeRequest } from '@/types/notice';

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
  const { me } = useFetchMe();
  const { refetch } = useQuery('notices', getNotice);

  const createNoticeMutation = useMutation(postNotice, {
    onSuccess: () => {
      createToastMessage('공지사항 등록 완료!', 'success');
      refetch();
    },
    onError: () => createToastMessage('다시 시도해주세요.', 'error'),
  });

  const createNotice = async (notice: NoticeRequest) => {
    if (!me || !me.id || !me.major) {
      createToastMessage('로그인이 필요합니다.', 'error');
      return;
    }

    const noticeWithUserInfo: NoticeRequest = {
      ...notice,
      major: MAJOR[me.major] as number,
      writer: me.id as number,
    };

    await createNoticeMutation.mutateAsync(noticeWithUserInfo);
  };

  return { createNotice };
};
