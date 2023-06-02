import LockerInfo from './LockerInfo';
import * as Styled from './style';

import Icon from '@/components/common/Icon';
import { getBuildingName } from '@/constants/building';
import { MAJOR, getMajorName } from '@/constants/major';
import { useFetchApplicantCheck } from '@/query/locker';
import { useFetchMajor } from '@/query/major';
import { useFetchShareUser } from '@/query/user';
import { LockerResponse } from '@/types/locker';
import { UserResponse } from '@/types/user';
import { YYMMDD, formatDate } from '@/utils/date';

export interface ProfileProps {
  me: UserResponse;
  locker: LockerResponse | undefined;
}

const StudentLocker = (props: ProfileProps) => {
  const { me, locker } = props;
  let sharedUser;
  let createdDate;
  let myMajor;

  if (locker?.owned_id == me.id && locker.shared_id) {
    const { user } = useFetchShareUser(locker.shared_id);
    sharedUser = user;
  } else if (locker?.shared_id == me.id) {
    const { user } = useFetchShareUser(locker?.owned_id ?? me.id);
    sharedUser = user;
  }

  const { data: applyCheck } = useFetchApplicantCheck(MAJOR[me.major], me.id);

  if (applyCheck) {
    createdDate = formatDate(new Date(applyCheck?.created_at));
    const { majorInfo } = useFetchMajor(applyCheck.major);
    myMajor = majorInfo;
    // apply_start_date = formatDate(new Date(majorInfo?.apply_start_date));
  }

  return (
    <Styled.ProfileContainer>
      <Styled.InfoLabel>[ 내 사물함 ]</Styled.InfoLabel>
      <Styled.MyInfo className={locker ? 'grid' : 'default'}>
        {locker ? (
          <>
            <Icon iconName='locker' size='70' hasCursor={false} />
            <Styled.InnerBox>
              <LockerInfo
                label='사물함 위치'
                value={`${getBuildingName(locker.building_id)} ${locker.floor}층`}
              />
              <LockerInfo label='사물함 번호' value={`${locker.locker_number}번`} />
              {locker.owned_id === me.id && (
                <LockerInfo
                  label='사용 시작일'
                  value={locker.start_date ? YYMMDD(locker.start_date) : '-'}
                />
              )}
              {locker.owned_id === me.id && (
                <LockerInfo
                  label='반납 예정일'
                  value={locker.end_date ? YYMMDD(locker.end_date) : '-'}
                />
              )}
              {locker.shared_id === me.id && (
                <LockerInfo
                  label='쉐어 시작일'
                  value={locker.share_start_date ? YYMMDD(locker.share_start_date) : '-'}
                />
              )}
              {locker.shared_id === me.id && (
                <LockerInfo
                  label='쉐어 반납일'
                  value={locker.share_end_date ? YYMMDD(locker.share_end_date) : '-'}
                />
              )}
              {locker.owned_id === me.id &&
                (!locker.shared_id ? (
                  <LockerInfo
                    label='쉐어등록여부'
                    value={locker.is_share_registered ? '✔️' : '❌'}
                  />
                ) : (
                  <LockerInfo label='쉐어중' value={`✔️`} />
                ))}
              {locker.shared_id === me.id && <LockerInfo label='쉐어 받음' value={`✔️`} />}
            </Styled.InnerBox>
          </>
        ) : applyCheck ? (
          <>
            <LockerInfo
              label='신청 시작 시간'
              value={
                myMajor?.apply_start_date
                  ? `${new Date(myMajor?.apply_start_date).toLocaleString().slice(6, -3)}`
                  : ''
              }
            />
            <LockerInfo
              label='신청 종료 시간'
              value={
                myMajor?.apply_end_date
                  ? `${new Date(myMajor?.apply_end_date).toLocaleString().slice(6, -3)}`
                  : ''
              }
            />
            {/* ?.slice(5,10) */}
            {/* <br /> */}
            <p>신청 여부 : ✔️</p>
          </>
        ) : (
          <>
            <p>배정된 사물함이 없습니다.</p>
            <p>사물함을 신청하세요.</p>
            <p>
              신청 여부 : <span style={{ color: 'red', fontWeight: '900' }}>❌</span>
            </p>
          </>
        )}
      </Styled.MyInfo>
      {!locker && applyCheck ? (
        <>
          <Styled.InfoLabel>[ 사물함 신청 정보 ]</Styled.InfoLabel>
          <Styled.MyInfo className={'grid'}>
            <Icon iconName='user' size='90' hasCursor={false} />
            <Styled.InnerBox>
              <LockerInfo label='학과' value={`${getMajorName(applyCheck.major)}`} />
              <LockerInfo label='신청 위치' value={`${getBuildingName(applyCheck.building_id)}`} />
              <LockerInfo label='신청 날짜' value={`${createdDate}`} />
            </Styled.InnerBox>
          </Styled.MyInfo>
        </>
      ) : undefined}
      {locker?.owned_id == me.id && locker.shared_id ? (
        <>
          <Styled.InfoLabel>[ 쉐어 이용자 ]</Styled.InfoLabel>
          <Styled.MyInfo className={locker ? 'grid' : 'none'}>
            <Icon iconName='share' size='70' hasCursor={false} />
            <Styled.InnerBox>
              <LockerInfo label='빌린 학우' value={`${sharedUser?.name}`} />
              <LockerInfo label='학과' value={`${sharedUser?.major}`} />
              <LockerInfo
                label='쉐어 시작일'
                value={locker.share_start_date ? YYMMDD(locker.share_start_date) : '-'}
              />
              <LockerInfo
                label='쉐어 반납일'
                value={locker.share_end_date ? YYMMDD(locker.share_end_date) : '-'}
              />
            </Styled.InnerBox>
          </Styled.MyInfo>
        </>
      ) : undefined}
      {locker?.shared_id == me.id ? (
        <>
          <Styled.InfoLabel>[ 쉐어 대여자 ]</Styled.InfoLabel>
          <Styled.MyInfo className={locker ? 'grid' : 'none'}>
            <Icon iconName='user' size='70' hasCursor={false} />
            <Styled.InnerBox>
              <LockerInfo label='빌려준 학우' value={`${sharedUser?.name}`} />
              <LockerInfo label='학과' value={`${sharedUser?.major}`} />
              <LockerInfo
                label='쉐어 시작일'
                value={locker.share_start_date ? YYMMDD(locker.share_start_date) : '-'}
              />
              <LockerInfo
                label='쉐어 반납일'
                value={locker.share_end_date ? YYMMDD(locker.share_end_date) : '-'}
              />
              {locker.owned_id === me.id &&
                (!locker.shared_id ? (
                  <LockerInfo
                    label='쉐어등록여부'
                    value={locker.is_share_registered ? '✔️' : '❌'}
                  />
                ) : (
                  `사물함 이용중`
                ))}
            </Styled.InnerBox>
          </Styled.MyInfo>
        </>
      ) : undefined}
    </Styled.ProfileContainer>
  );
};

export default StudentLocker;
