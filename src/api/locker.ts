import { instance } from './instance';

import { LockerRequest, LockerResponse, RequestApplyLocker } from '@/types/locker';

export const getAllMajor = async () => {
  const { data } = await instance.get(`major/`);

  return data;
};

export const getLockerCounts = async (props: LockerRequest) => {
  const { major, building_id } = props;
  const { data } = await instance.get<LockerResponse[]>(
    `locker?major=${major}&building_id=${building_id}`
  );

  return data;
};

export const getLockerInfo = async (id: number) => {
  const { data } = await instance.get(`locker/${id}`);

  return data;
};

export const getApplicant = async (props: LockerRequest) => {
  const { major, building_id } = props;
  const { data } = await instance.get(`apply?major=${major}&building_id=${building_id}`);

  return data;
};

export const postApplyLocker = async (body: RequestApplyLocker) => {
  const { data } = await instance.post('apply/', body);

  return data;
};
