import { instance } from './instance';

import { MAJOR } from '@/constants/major';
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

// 배정 결과 가져오는 api 생기면 수정 예정
export const getMajorLocker = async (major: number) => {
  const majorNumber = MAJOR[major] || 0;
  const { data } = await instance.get(`locker?major=${majorNumber}`);

  return data;
};

export const getApply = async (props: Omit<LockerRequest, 'onSuccess'>) => {
  const { major, building } = props;
  const { data } = await instance.get(`apply?major=${major}&building_id=${building}`);

  return data;
};
