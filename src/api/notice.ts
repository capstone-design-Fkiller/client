import { instance } from './instance';

import { NoticeRequest, NoticeResponse } from '@/types/notice';

export const postNotice = async (notice: NoticeRequest) => {
  const response = await instance.post<NoticeRequest>('notice/', notice);
  return response.data;
};

export const getNotice = async () => {
  const { data } = await instance.get<NoticeResponse[]>(`notice/`);

  return data;
};

export const getMajorNotice = async (major: number) => {
  const { data } = await instance.get<NoticeResponse[]>(`notice/?major=${major}`);

  return data;
};

export const delNotice = async (id: number) => {
  const { data } = await instance.delete(`notice/${id}`);

  return data;
};
