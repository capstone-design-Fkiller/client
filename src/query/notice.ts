import { useMutation, useQuery, useQueryClient } from 'react-query';

import { getNotice, postNotice } from '@/api/notice';
import { MAJOR } from '@/constants/major';
import useToast from '@/hooks/useToast';
import { useFetchMe } from '@/query/user';
import { NoticeRequest } from '@/types/notice';

const QUERY_KEY = {
  notice: 'notice',
};

export const useFetchNotice = () => {
  const { createToastMessage } = useToast();

  const { data: notices, isLoading } = useQuery(QUERY_KEY.notice, getNotice, {
    onError: () => {
      createToastMessage('다시 시도해주세요.', 'error');
    },
  });

  return { data: notices, isLoading };
};

export const useCreateNoticeMutation = () => {
  const { me } = useFetchMe();
  const { createToastMessage } = useToast();

  const queryClient = useQueryClient();

  const createNotice = (body: Pick<NoticeRequest, 'content' | 'title'>) => {
    if (!me) throw new Error();

    return postNotice({ ...body, major: MAJOR[me.major], writer: me.id });
  };

  const mutation = useMutation(createNotice, {
    onSuccess: () => {
      createToastMessage('공지사항 등록 완료!', 'success');

      queryClient.invalidateQueries(QUERY_KEY.notice);
    },
    onError: () => createToastMessage('다시 시도해주세요.', 'error'),
  });

  return mutation;
};
