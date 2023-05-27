import { instance } from './instance';

import { LockerRequest, LockerResponse, RequestApplyLocker } from '@/types/locker';

export const getLockerCounts = async (props: LockerRequest) => {
  const { major, building_id } = props;
  const { data } = await instance.get<LockerResponse[]>(
    `locker?major=${major}&building_id=${building_id}`
  );

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

// ! Share Api 구현되면 추가
export const putShareLocker = async (id, body) => {
  const { data } = await instance.put(`locker/${id}`, body);

  return data;
};

export const getLockerInfo = async (id: number) => {
  const { data } = await instance.get(`locker/${id}`);

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
