export interface LockerRequest {
  major: number;
  building_id: number;
}

export interface LockerResponse {
  building_id: number;
  end_date: Date | null;
  id: number;
  is_share_registered: boolean;
  major: string;
  owned_id: number | null;
  share_end_date: Date | null;
  share_start_date: Date | null;
  shared_id: number | null;
  start_date: Date | null;
}

export interface RequestApplyLocker extends LockerRequest {
  building_id: number;
  major: number;
  user: number;
  priority_1?: number | boolean | string | null | undefined;
  priority_2?: number | boolean | string | null | undefined;
  priority_3?: number | boolean | string | null | undefined;
}
