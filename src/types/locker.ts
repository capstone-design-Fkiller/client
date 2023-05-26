export interface LockerRequest {
  major: number;
  building_id: number;
}

export interface LockerResponse {
  building_id: number;
  end_date: string | null;
  id: number;
  is_share_registered: boolean;
  major: number;
  owned_id: number | null;
  share_end_date: string | null;
  share_start_date: string | null;
  shared_id: number | null;
  start_date: string | null;
}

export interface RequestApplyLocker extends LockerRequest {
  user: number;
  priority_first?: number | boolean;
  priority_second?: number | boolean;
  priority_third?: number | boolean;
}
