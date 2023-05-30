import * as Styled from './style';

import { UserResponse } from '@/types/user';

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

// 사물함 정보 어떤 거 넣어줄지 논의
export const LockerData: React.FC<{ me: UserResponse }> = ({ me }) => (
  <Styled.ProfileInfo>
    <InfoRow label='사물함' value={me.id} />
    <InfoRow label='사물함 신청일' value={me.id} />
    <InfoRow label='사물함 배정일' value={me.id} />
  </Styled.ProfileInfo>
);
