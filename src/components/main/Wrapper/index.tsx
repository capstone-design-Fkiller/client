import * as Styled from './style';
import AdditionalLockerInfoBox from '../AdditionalLockerInfoBox';
import LockerInfoBox from '../LockerInfoBox';

import { MAJOR } from '@/constants/major';
import { useFetchApplicantCheck } from '@/query/locker';
import { LockerResponse } from '@/types/locker';
import { UserResponse } from '@/types/user';

export interface ProfileProps {
  me: UserResponse;
  locker: LockerResponse | undefined;
}

const StudentLocker = (props: ProfileProps) => {
  const { me, locker } = props;

  const { data: applyCheck } = useFetchApplicantCheck(MAJOR[me.major], me.id);

  return (
    <Styled.ProfileContainer>
      {<LockerInfoBox locker={locker} me={me} applyCheck={applyCheck} />}

      {<LockerInfoBox.Status locker={locker} me={me} applyCheck={applyCheck} />}

      {locker?.owned_id == me.id && locker.shared_id && (
        <AdditionalLockerInfoBox
          locker={locker}
          userId={locker?.owned_id}
          me={me}
          shareType='빌린 사람'
        />
      )}

      {locker?.shared_id == me.id && (
        <AdditionalLockerInfoBox
          locker={locker}
          userId={locker?.shared_id}
          me={me}
          shareType='빌려준 사람'
        />
      )}

      {/* {!locker && applyCheck && (
        <>
          <Styled.InfoLabel>[ 사물함 신청 상태 ]</Styled.InfoLabel>
          <Styled.MyInfo className={locker ? 'grid' : 'none'}>
            <Icon iconName='user' size='70' hasCursor={false} />
            <Styled.InnerBox>
              <LockerLabel label='학과' value={`${getMajorName(applyCheck.major)}`} />
              <LockerLabel label='신청 위치' value={`${getBuildingName(applyCheck.building_id)}`} />
              <LockerLabel label='신청 날짜' value={`${createdDate}`} />
            </Styled.InnerBox>
          </Styled.MyInfo>
        </>
      )} */}
      {/* {locker?.owned_id == me.id && locker.shared_id ? (
        <>
          <Styled.InfoLabel>[ 쉐어 대여자 ]</Styled.InfoLabel>
          <Styled.MyInfo className={locker ? 'grid' : 'none'}>
            <Icon iconName='share' size='70' hasCursor={false} />
            <Styled.InnerBox>
              <LockerLabel label='빌린 학우' value={`${sharedUser?.name}`} />
              <LockerLabel label='학과' value={`${sharedUser?.major}`} />
              <LockerLabel
                label='쉐어 시작일'
                value={locker.share_start_date ? YYMMDD(locker.share_start_date) : '-'}
              />
              <LockerLabel
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
              <LockerLabel label='빌려준 학우' value={`${sharedUser?.name}`} />
              <LockerLabel label='학과' value={`${sharedUser?.major}`} />
              <LockerLabel
                label='쉐어 시작일'
                value={locker.share_start_date ? YYMMDD(locker.share_start_date) : '-'}
              />
              <LockerLabel
                label='쉐어 반납일'
                value={locker.share_end_date ? YYMMDD(locker.share_end_date) : '-'}
              />
              {locker.owned_id === me.id &&
                (!locker.shared_id ? (
                  <LockerLabel
                    label='쉐어등록여부'
                    value={locker.is_share_registered ? '✔️' : '❌'}
                  />
                ) : (
                  `사물함 이용중`
                ))}
            </Styled.InnerBox>
          </Styled.MyInfo>
        </>
      ) : undefined} */}
    </Styled.ProfileContainer>
  );
};

export default StudentLocker;
