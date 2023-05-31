import * as Styled from './style';
import ProfileInfo from '../ProfileInfo';

import Icon from '@/components/common/Icon';
import { Separator } from '@/components/common/Separator';
import { LockerResponse } from '@/types/locker';
import { UserResponse } from '@/types/user';
import { YYMMDD } from '@/utils/date';

export interface ProfileProps {
  me: UserResponse;
  locker: LockerResponse | undefined;
}

const ProfileContainer = (props: ProfileProps) => {
  const { me, locker } = props;

  return (
    <Styled.ProfileContainer>
      <Icon iconName='user' size='100' hasCursor={false} />
      <Styled.InnerBox css={{ paddingTop: 0 }}>
        <ProfileInfo label='이름' value={me.name} />
        <ProfileInfo label='학과' value={me.major} />
        <ProfileInfo label='학번' value={`${me.id}`} />
        <ProfileInfo label='상태' value={me.is_usermode ? '사용자' : '관리자'} />
      </Styled.InnerBox>

      <Separator />

      {locker ? (
        <>
          <Icon iconName='locker' size='80' css={Styled.LockerIcon} hasCursor={false} />
          <Styled.InnerBox>
            <ProfileInfo label='사물함' value={`${locker.id}`} />
            <ProfileInfo
              label='사용 시작일'
              value={locker.start_date ? YYMMDD(locker.start_date) : '-'}
            />
            <ProfileInfo
              label='반납 예정일'
              value={locker.end_date ? YYMMDD(locker.end_date) : '-'}
            />
          </Styled.InnerBox>
        </>
      ) : (
        <Styled.InfoRow>사물함이 없습니다.</Styled.InfoRow>
      )}
    </Styled.ProfileContainer>
  );
};

export default ProfileContainer;
