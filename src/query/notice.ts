import { useMutation, useQuery, useQueryClient } from 'react-query';

import { delNotice, getNotice, getNoticeDetail, postNotice, patchNotice } from '@/api/notice';
import { MAJOR } from '@/constants/major';
import useToast from '@/hooks/useToast';
import { useFetchMe } from '@/query/user';
import { EditNoticeRequest, NoticeRequest } from '@/types/notice';

const QUERY_KEY = {
  notice: 'notice',
  noticeDetail: 'noticedetail',
};

export const useFetchNotice = (major: number) => {
  const { createToastMessage } = useToast();
  const { data: notices, isLoading } = useQuery([QUERY_KEY.notice, major], () => getNotice(major), {
    onError: () => {
      createToastMessage('다시 시도해주세요.', 'error');
    },
    staleTime: 60000,
    refetchInterval: 60000,
    refetchOnWindowFocus: false,
  });
  return { data: notices, isLoading };
};

export const useFetchNoticeDetail = (noticeId: number) => {
  const { createToastMessage } = useToast();
  const queryClient = useQueryClient();

  const { data: notice, isLoading } = useQuery(
    [QUERY_KEY.noticeDetail, noticeId],
    () => getNoticeDetail(noticeId),
    {
      onError: () => {
        createToastMessage('다시 시도해주세요.', 'error');
      },
      staleTime: 60000,
      refetchInterval: 60000,
      refetchOnWindowFocus: false,
    }
  );
  queryClient.invalidateQueries(QUERY_KEY.noticeDetail);

  return { data: notice, isLoading };
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

export const useEditNoticeMutation = () => {
  const { me } = useFetchMe();
  const queryClient = useQueryClient();
  const { createToastMessage } = useToast();

  if (!me) throw new Error();

  const mutation = useMutation((body: EditNoticeRequest) => patchNotice({ ...body }), {
    onSuccess: () => {
      createToastMessage('공지사항 수정 완료!', 'success');
      queryClient.invalidateQueries(QUERY_KEY.notice);
    },
    onError: () => createToastMessage('다시 시도해주세요.', 'error'),
  });

  return mutation;
};

export const useDeleteNoticeMutation = () => {
  const { createToastMessage } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation(delNotice, {
    onSuccess: () => {
      createToastMessage('공지사항 삭제 완료!', 'success');
      queryClient.invalidateQueries(QUERY_KEY.notice);
    },
    onError: () => createToastMessage('다시 시도해주세요.', 'error'),
  });

  return mutation;
};
