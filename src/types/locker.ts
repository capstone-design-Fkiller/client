import { MajorPriorityAnswerRequest } from './major';

export interface LockerRequest {
  major: number;
  building_id: number;
}

export interface LockerResponse {
  building_id: number;
  end_date: string;
  id: number;
  is_share_registered: boolean;
  major: string;
  floor: number;
  locker_number: number;
  owned_id: number | null;
  owned_name: string | null;
  share_end_date: string;
  share_start_date: string;
  shared_id: number | null;
  shared_name: string | null;
  start_date: string;
}

export interface RequestApplyLocker extends Partial<MajorPriorityAnswerRequest> {
  building_id: number;
  major: number;
  user: number;
}

export type ConvertToShareRequest = Pick<LockerResponse, 'id'> & {
  share_end_date: Date | null;
  share_start_date: Date | null;
};

export type ApplyShareRequest = Pick<LockerResponse, 'id' | 'shared_id'>;
