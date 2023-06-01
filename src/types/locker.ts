export interface LockerRequest {
  major: number;
  building_id: number;
}

export interface LockerResponse {
  building_id: number;
  end_date: string | null;
  id: number;
  locker_number: number;
  is_share_registered: boolean;
  major: string;
  floor: number;
  owned_id: number | null;
  share_end_date: string | null;
  share_start_date: string | null;
  shared_id: number | null;
  start_date: string | null;
}

export interface RequestApplyLocker extends LockerRequest {
  building_id: number;
  major: number;
  user: number;
  priority_1?: number | boolean | string | null | undefined;
  priority_2?: number | boolean | string | null | undefined;
  priority_3?: number | boolean | string | null | undefined;
}

export type ConvertToShareRequest = Pick<LockerResponse, 'id'> & {
  share_end_date: Date | null;
  share_start_date: Date | null;
};

export type ApplyShareRequest = Pick<LockerResponse, 'id' | 'shared_id'>;
