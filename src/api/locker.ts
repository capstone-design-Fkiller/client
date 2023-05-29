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

// // ! Share Api 구현되면 추가
// export const putShareLocker = async (id, body) => {
//   const { data } = await instance.put(`locker/${id}`, body);

//   return data;
// };

export const getLockerInfo = async (id: number) => {
  const { data } = await instance.get(`locker/${id}/`);

  return data;
};

export const getMyLocker = async (id: number) => {
  const { data } = await instance.get<LockerResponse[]>(`locker/?owned_id=${id}`);
  console.log(data, 'owned id - 배정된 사물함');

  if (data.length == 0) {
    const { data } = await instance.get(`locker/?shared_id=${id}`);
    console.log(data, 'shared_id - 쉐어받은 사물함');
    return data;
  }

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
  const { data } = await axios.get<LockerResponse[]>(
    `http://127.0.0.1:8000/locker?major=${id}&is_share_registered=True`
  );

  return data;
};
