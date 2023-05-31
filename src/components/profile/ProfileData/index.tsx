import * as Styled from './style';

import { LockerResponse } from '@/types/locker';
import { UserResponse } from '@/types/user';
import { YYMMDD } from '@/utils/date';

export interface InfoRowProps {
  label: string;
  value: string | number | boolean;
}

export const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <Styled.InfoRow>
    <Styled.InfoLabel>{label}:</Styled.InfoLabel>
    <Styled.InfoValue>{value}</Styled.InfoValue>
  </Styled.InfoRow>
);

export const ProfileData: React.FC<{ me: UserResponse }> = ({ me }) => (
  <Styled.ProfileInfo>
    <InfoRow label='이름' value={me.name} />
    <InfoRow label='학과' value={me.major} />
    <InfoRow label='학번' value={me.id} />
    <InfoRow label='상태' value={me.is_usermode ? '사용자' : '관리자'} />
  </Styled.ProfileInfo>
);

// 머지 후 수정예정
export const LockerData: React.FC<{ locker: LockerResponse }> = ({ locker }) => (
  <Styled.ProfileInfo>
    <InfoRow label='사물함' value={locker.id} />
    <InfoRow label='사용 시작일' value={YYMMDD(locker.start_date || '-')} />
    <InfoRow label='반납 예정일' value={YYMMDD(locker.end_date || '-')} />
  </Styled.ProfileInfo>
);
