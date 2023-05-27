import axios from 'axios';

import { instance } from './instance';

import { LockerRequest, LockerResponse, RequestApplyLocker } from '@/types/locker';

export const getLockerCounts = async (props: LockerRequest) => {
  const { data } = await axios.get('http://127.0.0.1:8000/locker', { params: props });

  return data;
};

export const getApplicant = async (props: LockerRequest) => {
  const { data } = await axios.get(`http://127.0.0.1:8000/apply`, { params: props });

  return data;
};

export const postApplyLocker = async (body: RequestApplyLocker) => {
  const { data } = await instance.post('apply/', body);

  return data;
};

// ! Share Api 구현되면 추가
// export const postShareLocker = async (body: RequestShareLocker) => {
//   const { data } = await instance.post('share/', body);

//   return data;
// };

export const getLockerInfo = async (id: number) => {
  const { data } = await instance.get(`locker/${id}/`);

  return data;
};

export interface ShareRequest {
  id: number;
  major: number;
  building_id: number;
}

export const putShare = async (body: ShareRequest) => {
  const { id, ...args } = body;
  const { data } = await instance.post(`locker/${id}/`, {
    ...args,
    is_share_registered: true,
  });

  return data;
};

export const getShareableLockers = async (id: number) => {
  const { data } = await instance.get(
    `http://127.0.0.1:8000/locker?major=${id}&is_share_registered=True`
  );

  return data;
};
