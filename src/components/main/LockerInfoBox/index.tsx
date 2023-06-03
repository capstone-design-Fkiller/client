import * as Styled from './style';
import DateInfo from '../DateInfo';
import LockerLabel from '../LockerLabel';

import Icon from '@/components/common/Icon';
import { getBuildingName } from '@/constants/building';
import { getMajorName } from '@/constants/major';
import { LockerResponse } from '@/types/locker';
import { SortResponse } from '@/types/sort';
import { UserResponse } from '@/types/user';
import { formatDate } from '@/utils/date';

interface LockerInfoBoxProps {
  locker: LockerResponse | undefined;
  me: UserResponse;
  applyCheck: SortResponse | undefined;
}

const LockerInfoBox = (props: LockerInfoBoxProps) => {
  const { locker, me, applyCheck } = props;

  if (!locker)
    return (
      <>
        <Styled.InfoLabel>[ 내 사물함 ]</Styled.InfoLabel>
        <Styled.MyInfo className={'none'}>
          <p>배정된 사물함이 없습니다.</p>
          <p>사물함을 신청하세요.</p>
          <p>
            신청 여부 :{' '}
            <span style={{ color: 'red', fontWeight: '900' }}>{applyCheck ? '✔️' : '❌'}</span>
          </p>
        </Styled.MyInfo>
      </>
    );

  return (
    <>
      <Styled.InfoLabel>[ 내 사물함 ]</Styled.InfoLabel>
      <Styled.MyInfo className={'flex'}>
        <Icon iconName='locker' size='70' hasCursor={false} />
        <Styled.InnerBox>
          <LockerLabel
            label='사물함 위치'
            value={`${getBuildingName(locker.building_id)} ${locker.floor}층`}
          />
          <LockerLabel label='사물함 번호' value={`${locker.locker_number}번`} />
          {locker.owned_id === me.id && (
            <>
              <DateInfo
                start_label='사용 시작일'
                start_date={locker.start_date}
                end_label='반납 예정일'
                end_date={locker.end_date}
              />

              {!locker.shared_id ? (
                <LockerLabel
                  label='쉐어등록여부'
                  value={locker.is_share_registered ? '✔️' : '❌'}
                />
              ) : (
                <LockerLabel label='쉐어중' value={`✔️`} />
              )}
            </>
          )}

          {locker.shared_id === me.id && (
            <>
              <DateInfo
                start_label='쉐어 시작일'
                start_date={locker.share_start_date}
                end_label='쉐어 종료일'
                end_date={locker.share_end_date}
              />
              <LockerLabel label='쉐어 받음' value={`✔️`} />
            </>
          )}
        </Styled.InnerBox>
      </Styled.MyInfo>
    </>
  );
};

export default LockerInfoBox;

LockerInfoBox.Status = function LockerInfoBox(props: LockerInfoBoxProps) {
  const { locker, applyCheck } = props;

  if (locker || !applyCheck) return null;

  const createdDate = formatDate(new Date(applyCheck.created_at));

  return (
    <>
      <Styled.InfoLabel>[ 사물함 신청 정보 ]</Styled.InfoLabel>
      <Styled.MyInfo className={'grid'}>
        <Icon iconName='user' size='90' hasCursor={false} />
        <Styled.InnerBox>
          <LockerLabel label='학과' value={`${getMajorName(applyCheck.major)}`} />
          <LockerLabel label='신청 위치' value={`${getBuildingName(applyCheck.building_id)}`} />
          <LockerLabel label='신청 날짜' value={`${createdDate}`} />
        </Styled.InnerBox>
      </Styled.MyInfo>
    </>
  );
};
