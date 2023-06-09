export interface NoticeRequest {
  id: number;
  title: string;
  content: string;
  major: number;
  writer: number;
}

export interface NoticeResponse {
  id: number;
  title: string;
  content: string;
  created_at: string;
  major: number;
  writer: number;
}

export type EditNoticeRequest = Pick<NoticeRequest, 'id' | 'content' | 'title'>;