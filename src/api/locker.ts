import { instance } from './instance';

export const getAllMajor = async () => {
  const { data } = await instance.get(`major/`);

  return data;
};
