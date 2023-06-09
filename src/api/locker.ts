import { instance } from './instance';

import {
  LockerRequest,
  LockerResponse,
  RequestApplyLocker,
  ConvertToShareRequest,
  ApplyShareRequest,
} from '@/types/locker';
import { SortResponse } from '@/types/sort';

export const getLockerCounts = async (props: LockerRequest) => {
  const { data } = await instance.get('locker/', { params: props });

  return data;
};

export const getApplicant = async (props: LockerRequest) => {
  const { data } = await instance.get(`apply/`, { params: props });

  return data;
};

export const getApplicantCheck = async (majorId: number, userId: number) => {
  const { data } = await instance.get<SortResponse[]>(`apply/`, {
    params: { major: majorId, user: userId },
  });

  return data[0];
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

    return data[0];
  }

  return data[0];
};

export const getApplicableBuilding = async (id: number) => {
  const { data } = await instance.get<number[]>(`locker/building/?major=${id}`);

  return data;
};

export const patchConvertMyLockerShare = async (body: ConvertToShareRequest) => {
  const { id, ...args } = body;
  const { data } = await instance.patch<LockerResponse>(`locker/${id}`, {
    ...args,
  });

  return data;
};

export const getShareableLockers = async () => {
  const { data } = await instance.get<LockerResponse[]>(
    `locker/sharable/?is_share_registered=True`
  );

  return data;
};

// building_id: number;
// end_date: string | null;
// id: number;
// is_share_registered: boolean;
// major: string;
// floor: number;
// owned_id: number | null;
// share_end_date: string | null;
// share_start_date: string | null;
// shared_id: number | null;
// start_date: string | null;

export const patchLockerShare = async (body: ApplyShareRequest) => {
  const { id, shared_id } = body;
  const { data } = await instance.patch<LockerResponse>(`locker/${id}`, {
    shared_id,
  });

  return data;
};
