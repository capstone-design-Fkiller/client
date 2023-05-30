import { instance } from './instance';

import {
  LockerRequest,
  LockerResponse,
  RequestApplyLocker,
  // ShareApplyRequest,
  // ShareRegisterRequest,
  // ShareRequest,
  ConvertToShareRequest,
  ApplyShareRequest,
} from '@/types/locker';

export const getLockerCounts = async (props: LockerRequest) => {
  const { data } = await instance.get('locker/', { params: props });

  return data;
};

export const getApplicant = async (props: LockerRequest) => {
  const { data } = await instance.get(`apply/`, { params: props });

  return data;
};

export const postApplyLocker = async (body: RequestApplyLocker) => {
  const { data } = await instance.post('apply/', body);

  return data;
};

export const getLockerInfo = async (id: number) => {
  const { data } = await instance.get(`locker/${id}/`);

  return data;
};

export const getMyLocker = async (id: number) => {
  const { data } = await instance.get<LockerResponse[]>(`locker/?owned_id=${id}`);

  if (data.length === 0) {
    const { data } = await instance.get(`locker/?shared_id=${id}`);

    return data;
  }

  return data;
};

// export const putShareLocker = async (body: ShareRegisterRequest | ShareApplyRequest) => {
//   const { id, ...args } = body;
//   const { data } = await instance.put(`locker/${id}`, {
//     ...args,
//   });

//   return data;
// };
export const putMyLockerToShare = async (body: ConvertToShareRequest) => {
  const { id, ...args } = body;
  const { data } = await instance.put(`locker/${id}/`, {
    ...args,
  });

  return data;
};

export const getShareableLockers = async (id: number) => {
  const { data } = await instance.get<LockerResponse[]>(
    `locker/?major=${id}&is_share_registered=True`
  );

  return data;
};

export const putLockerShare = async (body: ApplyShareRequest) => {
  const { id, shared_id } = body;
  const { data } = await instance.put(`locker/${id}`, {
    shared_id,
  });

  return data;
};
