import { instance } from './instance';

export const getAllMajor = async () => {
  const { data } = await instance.get(`major/`);

  return data;
};

export interface ApplicantRequest {
  major: number;
  building: number;
  onSuccess?: (data: ApplicantResponse[]) => void;
}

export interface ApplicantResponse {
  building_id: number;
  end_date: Date | null;
  id: number;
  is_share_registered: boolean;
  major: number;
  owned_id: number | null;
  share_end_date: Date | null;
  share_start_date: Date | null;
  shared_id: number | null;
  start_date: Date | null;
}

export const getApplicant = async (props: Omit<ApplicantRequest, 'onSuccess'>) => {
  const { major, building } = props;
  const { data } = await instance.get<ApplicantResponse[]>(
    `locker?major=${major}&building_id=${building}`
  );

  return data;
};

export const getLockerInfo = async (id: number) => {
  const { data } = await instance.get(`locker/${id}`);

  return data;
};
