import { instance } from './instance';

import { EditNoticeRequest, NoticeRequest, NoticeResponse } from '@/types/notice';

export const postNotice = async (notice: Omit<NoticeRequest, 'id'>) => {
  const { data } = await instance.post<NoticeResponse>('notice/', notice);

  return data;
};

export const getNotice = async (major: number) => {
  const { data } = await instance.get<NoticeResponse[]>(`notice/?major=${major}`);

  return data;
};

export const getNoticeDetail = async (noticeId: number) => {
  const { data } = await instance.get<NoticeResponse>(`notice/${noticeId}`);

  return data;
};

export const patchNotice = async (body: EditNoticeRequest) => {
  const { id, ...args } = body;

  const { data } = await instance.patch<NoticeResponse>(`notice/${id}`, args);

  return data;
};

export const delNotice = async (id: number) => {
  const { data } = await instance.delete(`notice/${id}`);

  return data;
};
