export interface NoticeRequest {
  title: string;
  content: string;
  major: number;
  writer: number;
}

export interface NoticeResponse {
    slice: any;
    length: any;
    find: any;
    id: number;
    title: string;
    content: string;
    created_at: string;
    major: number;
    writer: number;
    [Symbol.iterator](): IterableIterator<NoticeResponse>;
}
