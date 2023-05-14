export interface LockerRequest {
  major: number;
  building: number;
}

export interface LockerResponse {
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
