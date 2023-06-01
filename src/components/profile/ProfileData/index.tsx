import * as Styled from './style';
import ProfileInfo from '../ProfileInfo';

import Icon from '@/components/common/Icon';
import { getBuildingName } from '@/constants/building';
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
      <Styled.MyInfo>
        <div style={{ width: '30%' }}>
          <Icon iconName='user' size='100' hasCursor={false} />
        </div>
        <Styled.InnerBox style={{ width: '70%' }}>
          <ProfileInfo label='이름' value={me.name} />
          <ProfileInfo label='학과' value={me.major} />
          <ProfileInfo label='학번' value={`${me.id}`} />
          <ProfileInfo label='상태' value={me.is_usermode ? '사용자' : '관리자'} />
        </Styled.InnerBox>
      </Styled.MyInfo>

      {locker ? (
        <Styled.MyInfo>
          <div style={{ width: '30%' }}>
            <Icon iconName='locker' size='70' css={Styled.LockerIcon} hasCursor={false} />
          </div>
          <Styled.InnerBox style={{ width: '70%' }}>
            <ProfileInfo label='사물함 번호' value={`${locker.locker_number}번`} />
            <ProfileInfo
              label='사물함 위치'
              value={`${getBuildingName(locker.building_id)} ${locker.floor}층`}
            />
            <ProfileInfo
              label='사용 시작일'
              value={locker.start_date ? YYMMDD(locker.start_date) : '-'}
            />
            <ProfileInfo
              label='반납 예정일'
              value={locker.end_date ? YYMMDD(locker.end_date) : '-'}
            />
          </Styled.InnerBox>
        </Styled.MyInfo>
      ) : (
        <Styled.MyInfo>
          <Styled.InfoRow>
            <p>내 사물함이 없습니다.</p>
          </Styled.InfoRow>
        </Styled.MyInfo>
      )}
    </Styled.ProfileContainer>
  );
};

export default ProfileContainer;
