import { instance } from './instance';

export const getLockers = async (id: number) => {
  const { data } = await instance.get(`major/${id}`);

  return data;
};
