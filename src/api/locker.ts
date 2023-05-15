import { instance } from './instance';

import { LockerRequest, LockerResponse } from '@/types/locker';

export const getAllMajor = async () => {
  const { data } = await instance.get(`major/`);

  return data;
};

export const getLockerCounts = async (props: LockerRequest) => {
  const { major, building } = props;
  const { data } = await instance.get<LockerResponse[]>(
    `locker?major=${major}&building_id=${building}`
  );

  return data;
};

export const getLockerInfo = async (id: number) => {
  const { data } = await instance.get(`locker/${id}`);

  return data;
};

export const getApply = async (props: LockerRequest) => {
  const { major, building } = props;
  const { data } = await instance.get(`apply?major=${major}&building_id=${building}`);

  return data;
};
