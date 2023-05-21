import { instance } from './instance';

import { NoticeRequest, NoticeResponse } from '@/types/notice';

export const createNotice = async (notice: NoticeRequest) => {
  const { data } = await instance.post<NoticeRequest>('notice/', notice);
  return data;
};

export const getNotice = async (): Promise<NoticeResponse> => {
  const { data } = await instance.get<NoticeResponse>(`notice/`);
  return data;
};
