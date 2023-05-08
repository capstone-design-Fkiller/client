import { instance } from './instance';

export const getAllMajor = async () => {
  const { data } = await instance.get(`major/`);

  return data;
};

export const getApply = async () => {
  const { data } = await instance.get('apply/');

  return data;
};

export const getLockerInfo = async (id: number) => {
  const { data } = await instance.get(`locker/${id}`);

  return data;
};
